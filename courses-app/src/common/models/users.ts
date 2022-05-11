export interface UsersResponse {
	successful: boolean;
	result: Result;
}

export interface Result {
	name: string;
	email: string;
	password: string;
	role: string;
	id: string;
}
