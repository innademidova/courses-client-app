import { User } from '../../common/models/loginResponse';
import { LOGIN, GET_ME, LOGOUT } from './actionTypes';
export const loginAC = (user: User, token: string) => ({
	type: LOGIN,
	user,
	token,
});
export const logoutAC = () => ({ type: LOGOUT });
export const getMeAC = (user: User) => ({ type: GET_ME, user });
