import { CoursesForm } from './../common/models/course';
import axios from 'axios';
import { CoursesResponse } from '../common/models/coursesResponse';
import { LoginResponse } from '../common/models/loginResponse';
import { AuthorsResponse } from '../common/models/authorsResponse';
import { UserResponse } from '../common/models/userResponse';

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
	logout() {
		return instance.delete('logout');
	},
};

export const usersAPI = {
	getMe() {
		return instance.get<UserResponse>('users/me');
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
	addCourse(course: CoursesForm) {
		return instance.post('/courses/add', course);
	},
	editCourse(id: string) {
		return instance.put(`/courses/${id}`, id);
	},
};
