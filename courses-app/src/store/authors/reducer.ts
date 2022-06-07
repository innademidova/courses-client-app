import { Author } from '../../common/models/author';
import {
	CREATE_AUTHOR,
	DELETE_AUTHOR,
	SET_AUTHORS,
	SET_COURSES_AUTHORS,
} from './actionTypes';
import { AuthorsState } from '../../common/models/state/state';

interface AuthorsAction {
	type: string;
	authors: Author[];
	author: Author;
	id: string;
}

const initialState: AuthorsState = {
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
		case DELETE_AUTHOR:
			return {
				...state,
				authors: [...state.authors.filter((author) => author.id !== action.id)],
			};
		default:
			return state;
	}
};

export default authorsReducer;
