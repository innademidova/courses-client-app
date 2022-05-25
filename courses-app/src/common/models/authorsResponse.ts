import { Author } from './author';

export interface AuthorsResponse {
	successful: boolean;
	result: Author[];
}
