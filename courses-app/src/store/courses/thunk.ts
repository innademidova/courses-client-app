import { CoursesForm } from './../../common/models/course';
import { setCoursesAC, addCourseAC } from './actionCreator';
import { coursesAPI } from './../../api/api';
import { AppDispatch } from './../index';

export const getCourses = () => async (dispatch: AppDispatch) => {
	const courses = await coursesAPI.getCourses();
	dispatch(setCoursesAC(courses));
};

export const addNewCourse =
	(course: CoursesForm) => async (dispatch: AppDispatch) => {
		const response = await coursesAPI.addCourse(course);
		dispatch(addCourseAC(response.data.result));
	};
