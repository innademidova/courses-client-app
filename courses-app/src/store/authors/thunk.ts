import { authorsAPI } from '../../api/api';
import { AppDispatch } from '../index';
import { createAuthorAC, deleteAuthorAC, setAuthorsAC } from './actionCreators';

export const setAuthors = () => async (dispatch: AppDispatch) => {
	const authors = await authorsAPI.getAuthors();
	dispatch(setAuthorsAC(authors));
};

export const addAuthor = (author: string) => async (dispatch: AppDispatch) => {
	const response = await authorsAPI.addAuthor(author);
	dispatch(createAuthorAC(response.data.result));
};

export const deleteAuthor = (id: string) => async (dispatch: AppDispatch) => {
	await authorsAPI.deleteAuthor(id);
	dispatch(deleteAuthorAC(id));
};
