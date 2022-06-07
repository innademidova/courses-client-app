import { User } from '../../common/models/loginResponse';
import { UserInfo } from '../../common/models/userResponse';
import { LOGIN, GET_ME, LOGOUT, TOGGLE_IS_FETCHING } from './actionTypes';
export const loginAC = (user: User, token: string) => ({
	type: LOGIN,
	user,
	token,
});
export const logoutAC = () => ({ type: LOGOUT });
export const getMeAC = (userInfo: UserInfo) => ({
	type: GET_ME,
	userInfo,
});
export const toggleIsFetching = (isFetching: boolean) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});
