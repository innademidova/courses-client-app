import {
	ADD_COURSES_AUTHOR,
	CREATE_AUTHOR,
	DELETE_COURSES_AUTHOR,
	SET_AUTHORS,
	SET_COURSES_AUTHORS,
} from './actionTypes';
import { Author } from '../../common/models/author';

export const setAuthorsAC = (authors: Author[]) => ({
	type: SET_AUTHORS,
	authors,
});

export const createAuthorAC = (author: Author) => ({
	type: CREATE_AUTHOR,
	author,
});

export const addCoursesAuthorAC = (author: Author) => ({
	type: ADD_COURSES_AUTHOR,
	author,
});

export const deleteCoursesAuthorAC = (author: Author) => ({
	type: DELETE_COURSES_AUTHOR,
	author,
});

export const setCoursesAuthorsAC = (authors: string[]) => ({
	type: SET_COURSES_AUTHORS,
	authors,
});
