import { authorsAPI } from '../../api/api';
import { AppDispatch } from '../index';
import { createAuthorAC, setAuthorsAC } from './actionCreators';
import { AuthorForm } from '../../components/CourseForm/constants/constants';

export const setAuthors = () => async (dispatch: AppDispatch) => {
	const authors = await authorsAPI.getAuthors();
	dispatch(setAuthorsAC(authors));
};

export const addAuthor =
	(author: AuthorForm) => async (dispatch: AppDispatch) => {
		const response = await authorsAPI.addAuthor(author);
		dispatch(createAuthorAC(response.data.result));
	};
