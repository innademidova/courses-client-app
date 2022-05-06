import axios from 'axios';
import { LoginResponse } from '../common/models/auth';
const instance = axios.create({
	baseURL: 'http://localhost:4000/',
});

export const authAPI = {
	register(newUser: { name: string; email: string; password: string }) {
		return instance.post<LoginResponse>('register', newUser);
	},
	login(user: { email: string; password: string }) {
		return instance.post<LoginResponse>('login', user);
	},
};
