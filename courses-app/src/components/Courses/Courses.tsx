import { SearchBar, CourseCard } from '.';

import { PlusLg } from 'react-bootstrap-icons';

import { useNavigate } from 'react-router-dom';

import { getCourses } from '../../store/courses/selectors';

import { getAuthors } from '../../store/authors/selectors';
import { Button } from 'react-bootstrap';
import { useAppSelector } from '../../hooks';
import { getCurrentUser } from '../../store/user/selectors';

const Courses = () => {
	const navigate = useNavigate();
	const courses = useAppSelector(getCourses);
	const coursesAuthors = useAppSelector(getAuthors);
	const user = useAppSelector(getCurrentUser);
	const getAuthorsName = (id: string): string => {
		const author = coursesAuthors.find((author) => author.id === id);
		return author?.name || '';
	};

	return (
		<div>
			<SearchBar />
			{courses.map((item) => (
				<CourseCard
					key={item.id}
					courseAuthors={item.authors.map(getAuthorsName)}
					{...item}
				/>
			))}
			{user.role === 'admin' && (
				<Button
					onClick={() => {
						navigate('add');
					}}
				>
					Add new course
					<PlusLg />
				</Button>
			)}
		</div>
	);
};

export default Courses;
