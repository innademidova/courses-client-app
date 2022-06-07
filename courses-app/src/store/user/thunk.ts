import { AppDispatch } from '../index';
import { authAPI, usersAPI } from '../../api/api';
import { getMeAC, loginAC, logoutAC, toggleIsFetching } from './actionCreator';
import { localStorageKeys } from '../../common/constants/localStorage';

export const login =
	(email: string, password: string) => async (dispatch: AppDispatch) => {
		const data = await authAPI.login({ email, password });
		const token = data.result;
		const user = data.user;
		localStorage.setItem('access_token', token);
		dispatch(loginAC(user, token));
		dispatch(getMe());
	};

export const logout = () => async (dispatch: AppDispatch) => {
	await authAPI.logout();
	dispatch(logoutAC());
	localStorage.removeItem(localStorageKeys.token);
};

export const getMe = () => async (dispatch: AppDispatch) => {
	dispatch(toggleIsFetching(true));
	try {
		const data = await usersAPI.getMe();
		dispatch(getMeAC(data.data.result));
	} finally {
		dispatch(toggleIsFetching(false));
	}
};
