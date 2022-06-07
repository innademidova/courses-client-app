export interface Course extends CoursesForm {
	creationDate: string;
	id: string;
}

export interface CoursesForm {
	title: string;
	description: string;
	duration: number;
	authors: string[];
}

export interface RawCoursesForm {
	title: string;
	description: string;
	duration: string;
	author: string;
}
