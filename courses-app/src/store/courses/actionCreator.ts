import { Course, CoursesForm } from './../../common/models/course';
import { SEARCH_COURSES, SET_COURSES, ADD_NEW_COURSE } from './actionTypes';

export const setCoursesAC = (courses: Course[]) => ({
	type: SET_COURSES,
	courses,
});

export const searchCoursesAC = (inputValue: string) => ({
	type: SEARCH_COURSES,
	inputValue,
});

export const addCourseAC = (course: CoursesForm) => ({
	type: ADD_NEW_COURSE,
	course,
});
