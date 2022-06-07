import { Course } from '../../common/models/course';
import {
	SEARCH_COURSES,
	SET_COURSES,
	ADD_NEW_COURSE,
	DELETE_COURSE,
	UPDATE_COURSE,
	GET_COURSE,
	TOGGLE_IS_FETCHING,
} from './actionTypes';

export const setCoursesAC = (courses: Course[]) => ({
	type: SET_COURSES,
	courses,
});

export const searchCoursesAC = (inputValue: string) => ({
	type: SEARCH_COURSES,
	inputValue,
});

export const addCourseAC = (course: Course) => ({
	type: ADD_NEW_COURSE,
	course,
});

export const deleteCourseAC = (id: string) => ({
	type: DELETE_COURSE,
	id,
});

export const updateCourseAC = (id: string, course: Course) => ({
	type: UPDATE_COURSE,
	id,
	course,
});

export const getCourseAC = (course: Course) => ({
	type: GET_COURSE,
	course,
});

export const toggleIsFetching = (isFetching: boolean) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});
