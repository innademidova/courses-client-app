export interface AuthorsResponse {
	successful: boolean;
	result: Result[];
}

export interface Result {
	name: string;
	id: string;
}
