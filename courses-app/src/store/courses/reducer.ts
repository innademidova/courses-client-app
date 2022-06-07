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
import { CoursesState } from '../../common/models/state/state';
interface CoursesAction {
	type: string;
	courses: Course[];
	course: Course;
	inputValue: string;
	id: string;
	isFetching: boolean;
}

const initialState: CoursesState = {
	isFetching: true,
	courses: [] as Course[],
	course: undefined as Course | undefined,
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
		case DELETE_COURSE:
			return {
				...state,
				courses: [...state.courses.filter((course) => course.id !== action.id)],
			};
		case UPDATE_COURSE:
			return {
				...state,
				courses: [
					...state.courses.map((course) => {
						if (course.id === action.id) {
							return action.course;
						}
						return course;
					}),
				],
			};
		case GET_COURSE:
			return { ...state, course: action.course };
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching };
		default:
			return state;
	}
};

export default coursesReducer;
