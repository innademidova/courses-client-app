import { Author } from '../author';
import { Course } from '../course';

export interface State {
	courses: CoursesState;
	authors: AuthorsState;
	user: UserState;
}

export interface CoursesState {
	isFetching: boolean;
	courses: Course[];
	course: Course | undefined;
	search: string;
}

export interface AuthorsState {
	authors: Author[];
	coursesAuthors: string[];
}

export interface UserState {
	isFetching: boolean;
	isAuth: boolean;
	email: string;
	name: string;
	token: string;
	role: string;
}
