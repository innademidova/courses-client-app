import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	mockedAuthorsList,
	mockedCoursesList,
} from '../../common/data/courses';
import CourseInfo from '../CourseInfo/CourseInfo';
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
		<div>
			<Routes>
				<Route
					path=''
					element={
						<ExistedCourses
							authors={authors}
							setNewAuthor={setNewAuthor}
							allAuthors={mockedAuthorsList}
							courses={courses}
							setCourses={setCourses}
							allCourses={mockedCoursesList}
							setIsAddCourse={setIsAddCourse}
						/>
					}
				/>
				<Route path=':courseId' element={<CourseInfo courses={courses} />} />
			</Routes>
		</div>
	);
};

export default Courses;
