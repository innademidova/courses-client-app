import { GET_ME, LOGIN, LOGOUT, TOGGLE_IS_FETCHING } from './actionTypes';
import { User } from '../../common/models/loginResponse';
import { UserInfo } from '../../common/models/userResponse';

interface userAction {
	type: string;
	user: User;
	token: string;
	userInfo: UserInfo;
	isFetching: boolean;
}

const initialState = {
	isFetching: true,
	isAuth: false,
	email: '',
	name: '',
	token: '',
	role: '',
};

export const userReducer = (state = initialState, action: userAction) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				...action.user,
				isAuth: true,
				token: action.token,
			};
		case LOGOUT:
			return { ...initialState, isFetching: false };
		case GET_ME:
			return {
				...state,
				isAuth: true,
				email: action.userInfo.email,
				name: action.userInfo.name,
				role: action.userInfo.role,
			};
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching };
		default:
			return state;
	}
};
