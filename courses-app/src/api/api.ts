import axios from 'axios';
import { CoursesResponse } from '../common/models/coursesResponse';
import { LoginResponse } from '../common/models/auth';
import { AuthorsResponse } from '../common/models/authorsResponse';
import { UsersResponse } from '../common/models/users';

const instance = axios.create({
	baseURL: 'http://localhost:4000/',
});

instance.interceptors.request.use((config) => {
	const token = localStorage.getItem('access_token');
	if (config.headers && token) {
		config.headers['Authorization'] = token;
		return config;
	}
	return config;
});

export const authAPI = {
	register(newUser: { name: string; email: string; password: string }) {
		return instance.post<LoginResponse>('register', newUser);
	},
	login(user: { email: string; password: string }) {
		return instance.post<LoginResponse>('login', user);
	},
};

export const usersAPI = {
	getMe() {
		return instance.get<UsersResponse>('users/me');
	},
};

export const authorsAPI = {
	getAuthors() {
		return instance
			.get<AuthorsResponse>('authors/all')
			.then((response) => response.data.result);
	},
};

export const coursesAPI = {
	getCourses() {
		return instance
			.get<CoursesResponse>('/courses/all')
			.then((response) => response.data.result);
	},
};
