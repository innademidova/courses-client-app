export interface LoginResponse {
	successful: boolean;
	result: string;
	user: User;
	errors?: string[];
}

export interface User {
	email: string;
	name: string;
}
