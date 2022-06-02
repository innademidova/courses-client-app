import { ApiResponse } from './../common/models/apiResponse';
import { Course, CoursesForm } from './../common/models/course';
import axios from 'axios';
import { LoginResponse } from '../common/models/loginResponse';
import { UserResponse } from '../common/models/userResponse';
import { Author } from '../common/models/author';
import { AuthorForm } from '../components/CourseForm/constants/constants';

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
	async getAuthors() {
		const response = await instance.get<ApiResponse<Author[]>>('authors/all');
		return response.data.result;
	},
	addAuthor(author: AuthorForm) {
		return instance.post<ApiResponse<Author>>('/authors/add', {
			name: author.name,
		});
	},
};

export const coursesAPI = {
	async getCourses() {
		const response = await instance.get<ApiResponse<Course[]>>('/courses/all');
		return response.data.result;
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
	async getCourse(id: string) {
		const response = await instance.get<ApiResponse<Course>>(`/courses/${id}`);
		return response.data.result;
	},
	addCourse(course: CoursesForm) {
		return instance.post<ApiResponse<Course>>('/courses/add', course);
	},
	updateCourse(id: string, course: CoursesForm) {
		return instance.put<ApiResponse<Course>>(`/courses/${id}`, course);
	},
	deleteCourse(id: string) {
		return instance.delete<ApiResponse<string>>(`/courses/${id}`);
	},
};
