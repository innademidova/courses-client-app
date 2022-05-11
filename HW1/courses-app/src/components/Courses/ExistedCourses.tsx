import { Button } from '../../common';
import { SearchBar, CourseCard } from '.';
import { buttonText } from '../../common/constants/constants';
import { PlusLg } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Author } from '../../common/models/author';
import { Course } from '../../common/models/course';
import { useNavigate } from 'react-router-dom';

type Props = {
	authors: Author[];
	courses: Course[];
	setIsAddCourse: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExistedCourses = (props: Props) => {
	const navigate = useNavigate();
	const [courses, setCourses] = useState(props.courses);
	const search = (value: string) => {
		const valueToLowerCase = value.toLowerCase();
		const filteredCourses = courses.filter((course) => {
			return (
				course.title.toLowerCase().includes(valueToLowerCase) ||
				course.id.toLowerCase().includes(valueToLowerCase)
			);
		});
		setCourses(filteredCourses);
	};

	const getAuthorsName = (id: string): string => {
		const author = props.authors.find((author) => author.id === id);
		return author?.name || '';
	};

	return (
		<div>
			<SearchBar search={search} />
			{props.courses.map((item) => (
				<CourseCard
					key={item.id}
					courseAuthors={item.authors.map(getAuthorsName)}
					{...item}
				/>
			))}
			<Button
				buttonText={buttonText.addNewCourse}
				onClick={() => {
					props.setIsAddCourse(true);
					navigate('add');
				}}
				icon={PlusLg}
			/>
		</div>
	);
};

export default ExistedCourses;
