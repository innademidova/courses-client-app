import { Course, CoursesForm } from '../../common/models/course';
import { SEARCH_COURSES, SET_COURSES, ADD_NEW_COURSE } from './actionTypes';
interface CoursesAction {
	type: string;
	courses: Course[];
	course: Course;
	inputValue: string;
}

const initialState = {
	courses: [] as Course[],
	search: '',
};

const coursesReducer = (state = initialState, action: CoursesAction) => {
	switch (action.type) {
		case SET_COURSES:
			return { ...state, courses: [...action.courses] };
		case SEARCH_COURSES:
			return {
				...state,
				search: action.inputValue,
			};
		case ADD_NEW_COURSE:
			return { ...state, courses: [...state.courses, action.course] };
		default:
			return state;
	}
};

export default coursesReducer;
