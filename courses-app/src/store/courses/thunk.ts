import { CoursesForm } from '../../common/models/course';
import {
	setCoursesAC,
	addCourseAC,
	deleteCourseAC,
	updateCourseAC,
	getCourseAC,
	toggleIsFetching,
} from './actionCreator';
import { coursesAPI } from '../../api/api';
import { AppDispatch } from '../index';
import { setCoursesAuthorsAC } from '../authors/actionCreators';

export const setCourses = () => async (dispatch: AppDispatch) => {
	const courses = await coursesAPI.getCourses();
	dispatch(setCoursesAC(courses));
};

export const addNewCourse =
	(course: CoursesForm) => async (dispatch: AppDispatch) => {
		const response = await coursesAPI.addCourse(course);
		dispatch(addCourseAC(response.data.result));
	};

export const deleteCourse = (id: string) => async (dispatch: AppDispatch) => {
	await coursesAPI.deleteCourse(id);
	dispatch(deleteCourseAC(id));
};

export const updateCourse =
	(id: string, course: CoursesForm) => async (dispatch: AppDispatch) => {
		const response = await coursesAPI.updateCourse(id, course);
		dispatch(updateCourseAC(id, response.data.result));
	};

export const getCourse = (id: string) => async (dispatch: AppDispatch) => {
	dispatch(toggleIsFetching(true));
	try {
		const course = await coursesAPI.getCourse(id);
		dispatch(toggleIsFetching(false));
		dispatch(getCourseAC(course));
		dispatch(setCoursesAuthorsAC(course.authors));
	} catch {
		dispatch(toggleIsFetching(false));
		setTimeout(() => dispatch(toggleIsFetching(true)));
	}
};
