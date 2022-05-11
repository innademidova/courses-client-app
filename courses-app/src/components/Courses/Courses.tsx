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
	const [authors, setNewAuthor] = useState(mockedAuthorsList);
	const [courses, setCourses] = useState(mockedCoursesList);
	return (
		<div>
			<Routes>
				<Route
					path='add'
					element={
						<CreateCourse
							authors={authors}
							setNewAuthor={setNewAuthor}
							courses={courses}
							setCourses={setCourses}
						/>
					}
				/>

				<Route
					path=''
					element={<ExistedCourses authors={authors} courses={courses} />}
				/>
				<Route path=':courseId' element={<CourseInfo courses={courses} />} />
			</Routes>
		</div>
	);
};

export default Courses;
