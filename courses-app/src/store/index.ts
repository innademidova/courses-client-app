import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';
import { userReducer } from './user/reducer';

const reducers = combineReducers({
	authors: authorsReducer,
	courses: coursesReducer,
	user: userReducer,
});
const store = configureStore({
	reducer: reducers,
});
export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
