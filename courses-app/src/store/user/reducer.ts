import { LOGIN, LOGOUT } from './actionTypes';
import { User } from '../../common/models/loginResponse';

interface userAction {
	type: string;
	user: User;
	token: string;
}

const initialState = {
	isAuth: false,
	email: '',
	name: '',
	token: '',
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
			return initialState;
		default:
			return state;
	}
};
