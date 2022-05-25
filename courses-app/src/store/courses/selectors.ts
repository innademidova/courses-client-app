import { Course } from '../../common/models/course';
import { State } from '../../common/models/state/state';

export const getCourses = (state: State) => {
	const valueToLowerCase = state.courses.search.toLowerCase();
	return state.courses.courses.filter((course: Course) => {
		return (
			course.title.toLowerCase().includes(valueToLowerCase) ||
			course.id.toLowerCase().includes(valueToLowerCase)
		);
	});
};
