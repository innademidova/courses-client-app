class AuthService {
	getCurrentUser() {
		const user = localStorage.getItem('user');
		if (user) {
			return JSON.parse(user);
		}
		return undefined;
	}
}
export default new AuthService();
