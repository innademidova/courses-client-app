import { Author } from '../../common/models/author';
import { CREATE_AUTHOR, SET_AUTHORS, SET_COURSES_AUTHORS } from './actionTypes';

interface AuthorsAction {
	type: string;
	authors: Author[];
	author: Author;
}

const initialState = {
	authors: [],
	coursesAuthors: [],
};
const authorsReducer = (state = initialState, action: AuthorsAction) => {
	switch (action.type) {
		case SET_AUTHORS:
			return { ...state, authors: [...action.authors] };
		case CREATE_AUTHOR:
			return { ...state, authors: [...state.authors, action.author] };
		case SET_COURSES_AUTHORS: {
			return { ...state, coursesAuthors: [...action.authors] };
		}
		default:
			return state;
	}
};

export default authorsReducer;
