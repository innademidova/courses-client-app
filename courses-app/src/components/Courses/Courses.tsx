import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { authorsAPI, coursesAPI } from '../../api/api';
import { setAuthorsAC } from '../../store/authors/actionCreators';
import { setCoursesAC } from '../../store/courses/actionCreator';
import CourseInfo from '../CourseInfo/CourseInfo';
import CreateCourse from '../CreateCourse/CreateCourse';
import ExistedCourses from './ExistedCourses';

const Courses = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		coursesAPI.getCourses().then((data) => {
			dispatch(setCoursesAC(data));
		});
		authorsAPI.getAuthors().then((data) => {
			dispatch(setAuthorsAC(data));
		});
	}, [dispatch]);

	return (
		<div>
			<Routes>
				<Route path='add' element={<CreateCourse />} />

				<Route path='' element={<ExistedCourses />} />
				<Route path=':courseId' element={<CourseInfo />} />
			</Routes>
		</div>
	);
};

export default Courses;
