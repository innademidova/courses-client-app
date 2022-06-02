import { AppDispatch } from './../index';
import { usersAPI } from './../../api/api';
import { getMeAC, toggleIsFetching } from './actionCreator';

const getMe = () => async (dispatch: AppDispatch) => {
	dispatch(toggleIsFetching(true));
	const delay = (ms: number) =>
		new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	await delay(2000);

	const data = await usersAPI.getMe();
	dispatch(toggleIsFetching(false));
	dispatch(getMeAC(data.data.result));
};

export default getMe;
