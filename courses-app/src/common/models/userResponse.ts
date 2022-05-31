export interface UserResponse {
	successful: boolean;
	result: UserInfo;
}

export interface UserInfo {
	name: string;
	email: string;
	password: string;
	role: string;
	id: string;
}
