import { ApiResponse } from './../common/models/apiResponse';
import { Course, CoursesForm } from './../common/models/course';
import axios from 'axios';
import { LoginResponse } from '../common/models/loginResponse';
import { UserResponse } from '../common/models/userResponse';
import { Author } from '../common/models/author';

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
			.get<ApiResponse<Author[]>>('authors/all')
			.then((response) => response.data.result);
	},
};

export const coursesAPI = {
	getCourses() {
		return instance
			.get<ApiResponse<Course[]>>('/courses/all')
			.then((response) => response.data.result);
	},
	getFilteredCourses(
		title: string,
		description: string,
		creationDate: string,
		duration: number
	) {
		return instance.get('/courses/filter', {
			params: {
				title,
				description,
				creationDate,
				duration,
			},
		});
	},
	addCourse(course: CoursesForm) {
		return instance.post<ApiResponse<Course>>('/courses/add', course);
	},
	editCourse(id: string) {
		return instance.put<ApiResponse<Course>>(`/courses/${id}`, id);
	},
};
