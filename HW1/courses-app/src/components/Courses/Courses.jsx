import { useState } from 'react';
import {
	mockedAuthorsList,
	mockedCoursesList,
} from '../../common/data/courses';
import CreateCourse from '../CreateCourse/CreateCourse';
import ExistedCourses from './ExistedCourses';

const Courses = () => {
	const [isAddCourse, setIsAddCourse] = useState(false);
	const [authors, setNewAuthor] = useState(mockedAuthorsList);
	const [courses, setCourses] = useState(mockedCoursesList);
	if (isAddCourse) {
		return (
			<CreateCourse
				authors={authors}
				setNewAuthor={setNewAuthor}
				allAuthors={mockedAuthorsList}
				courses={courses}
				setCourses={setCourses}
				allCourses={mockedCoursesList}
				setIsAddCourse={setIsAddCourse}
			/>
		);
	}
	return (
		<ExistedCourses
			authors={authors}
			setNewAuthor={setNewAuthor}
			allAuthors={mockedAuthorsList}
			courses={courses}
			setCourses={setCourses}
			allCourses={mockedCoursesList}
			setIsAddCourse={setIsAddCourse}
		/>
	);
};

export default Courses;
