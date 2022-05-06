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

const Registration = () => {
	let navigate = useNavigate();
	const [name, setInputName] = useState('');
	const [password, setInputPassword] = useState('');
	const [email, setInputEmail] = useState('');
	const newUser = {
		name,
		password,
		email,
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		return authAPI.register(newUser).then((response) => {
			if (response.data.successful) {
				navigate('/login');
			}
		});
	};
	return (
		<div>
			<h3>Registration</h3>
			<Form onSubmit={handleSubmit}>
				<Input
					labelText={labelText.name}
					placeholder={placeholderText.name}
					onChange={(event) => setInputName(event.target.value)}
					value={name}
				/>
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
					<Button type='submit' buttonText={buttonText.registration} />
				</div>
			</Form>
			<div>
				If you have an account you can
				<Link to='/login'> Login </Link>
			</div>
		</div>
	);
};
export default Registration;
