import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../../api/api';
import { Button, Input } from '../../common';
import {
	buttonText,
	labelText,
	placeholderText,
} from '../../common/constants/constants';

const Login = () => {
	let navigate = useNavigate();
	const [password, setInputPassword] = useState('');
	const [email, setInputEmail] = useState('');
	return (
		<div>
			<h3>Login</h3>
			<Form onSubmit={() => authAPI.login()}>
				<Input
					labelText={labelText.email}
					placeholder={placeholderText.email}
					onChange={(event) => setInputEmail(event.target.value)}
					value={email}
				/>
				<Input
					labelText={labelText.password}
					placeholder={placeholderText.password}
					onChange={(event) => setInputPassword(event.target.value)}
					value={password}
				/>
				<div>
					<Button buttonText={buttonText.login} />
				</div>
			</Form>
			<div>
				If you have an account you can
				<Link to='/registration'> Registration</Link>
			</div>
		</div>
	);
};
export default Login;
