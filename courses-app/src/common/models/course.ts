export interface Course {
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
	id: string;
}

export interface CoursesForm {
	title: string;
	description: string;
	duration: number;
	authors: string[];
}
