import { SearchBar, CourseCard } from '.';

import { PlusLg } from 'react-bootstrap-icons';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCourses } from '../../store/courses/selectors';

import { getAuthors } from '../../store/authors/selectors';
import { Button } from 'react-bootstrap';

const ExistedCourses = () => {
	const navigate = useNavigate();
	const courses = useSelector(getCourses);
	const coursesAuthors = useSelector(getAuthors);

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
			<Button
				onClick={() => {
					navigate('add');
				}}
			>
				Add new course
				<PlusLg />
			</Button>
		</div>
	);
};

export default ExistedCourses;
