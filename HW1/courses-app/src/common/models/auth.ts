export interface LoginResponse {
	successful: boolean;
	result: string;
	user: User;
}

export interface User {
	email: string;
	name: string;
}
