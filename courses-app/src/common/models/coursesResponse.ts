import { Course } from './course';

export interface CoursesResponse {
	successful: boolean;
	result: Course[];
}
