import axios from 'axios';
const instance = axios.create({
	baseURL: 'http://localhost:4000/',
});

export const authAPI = {
	register(newUser) {
		return instance.post('register', newUser);
	},
	login() {
		return instance.post('login');
	},
};
