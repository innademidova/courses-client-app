import { Course } from '../../common/models/course';
import { State } from '../../common/models/state/state';

export const getCoursesState = (state: State) => state.courses;
export const getCourses = (state: State) => {
	const valueToLowerCase = state.courses.search.toLowerCase();
	return state.courses.courses.filter((course: Course) => {
		return (
			course.title.toLowerCase().includes(valueToLowerCase) ||
			course.id.includes(valueToLowerCase)
		);
	});
};

export const getCurrentCourse = (state: State) => state.courses.course;
