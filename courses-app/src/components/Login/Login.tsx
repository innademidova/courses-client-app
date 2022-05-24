import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../../api/api';
import { labelText, placeholderText } from '../../common/constants/constants';
import Input from '../../common/Input/Input';
import { State } from '../../common/models/state';

type Props = {
	state: [State, React.Dispatch<React.SetStateAction<State>>];
};

const Login = (props: Props) => {
	const [state, setState] = props.state;
	let navigate = useNavigate();
	const [password, setInputPassword] = useState('');
	const [email, setInputEmail] = useState('');
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		authAPI.login({ email, password }).then((response) => {
			const token = response.data.result;
			localStorage.setItem('access_token', token);
			setState({ ...state, user: response.data.user });
			if (response.data.successful) {
				navigate('/courses');
			}
		});
	};
	return (
		<div>
			<h3>Login</h3>
			<Form onSubmit={handleSubmit}>
				<Input
					labelText={labelText.email}
					placeholder={placeholderText.email}
					onChange={(value) => setInputEmail(value)}
					value={email}
				/>
				<Input
					type='password'
					labelText={labelText.password}
					placeholder={placeholderText.password}
					onChange={(value) => setInputPassword(value)}
					value={password}
				/>
				<div>
					<Button type='submit'>Login</Button>
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
