import { Formik } from 'formik';

import { Button, Col, Form, Row } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks';

import { FORM_FIELDS, FORM_INITIAL_VALUES } from './constants/constants';
import validationSchema from './validation/validation';
import { login } from '../../store/user/thunk';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	return (
		<>
			<h3>Login</h3>
			<Formik
				validationSchema={validationSchema}
				onSubmit={(values) => {
					const email = values[FORM_FIELDS.email];
					const password = values[FORM_FIELDS.password];
					dispatch(login(email, password));
					navigate('/courses');
				}}
				initialValues={FORM_INITIAL_VALUES}
			>
				{({
					handleSubmit,
					handleChange,
					handleBlur,
					values,
					touched,
					isValid,
					errors,
				}) => (
					<Form noValidate onSubmit={handleSubmit}>
						<Row className='mb-3'>
							<Form.Group as={Col} md='6' controlId='email'>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type='email'
									placeholder={FORM_FIELDS.email}
									name={FORM_FIELDS.email}
									onBlur={handleBlur}
									value={values[FORM_FIELDS.email]}
									onChange={handleChange}
									isInvalid={
										touched[FORM_FIELDS.email] && !!errors[FORM_FIELDS.email]
									}
								/>
								<Form.Control.Feedback type='invalid'>
									{errors[FORM_FIELDS.email]}
								</Form.Control.Feedback>
							</Form.Group>
						</Row>
						<Row className='mb-3'>
							<Form.Group as={Col} md='6' controlId='password'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type='password'
									placeholder={FORM_FIELDS.password}
									name={FORM_FIELDS.password}
									value={values[FORM_FIELDS.password]}
									onBlur={handleBlur}
									onChange={handleChange}
									isInvalid={
										touched[FORM_FIELDS.password] &&
										!!errors[FORM_FIELDS.password]
									}
								/>

								<Form.Control.Feedback type='invalid'>
									{errors[FORM_FIELDS.password]}
								</Form.Control.Feedback>
							</Form.Group>
						</Row>
						<Button type='submit' disabled={!isValid}>
							Login
						</Button>
					</Form>
				)}
			</Formik>
			<div>
				If you don't have an account you can
				<Link to='/registration'> Registration</Link>
			</div>
		</>
	);
};
export default Login;
