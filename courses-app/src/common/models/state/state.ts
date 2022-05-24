import { Author } from '../author';
import { Course } from '../course';

export interface State {
	courses: CoursesState;
	authors: AuthorsState;
}

export interface CoursesState {
	courses: Course[];
	search: string;
}

export interface AuthorsState {
	authors: Author[];
	coursesAuthors: string[];
}
