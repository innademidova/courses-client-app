import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Formik, FormikValues } from 'formik';
import { FORM_FIELDS, FORM_INITIAL_VALUES } from './constants/constants';
import { routes } from '../../common/constants/routes';
import validationSchema from './validation/validation';

const Registration = () => {
	let navigate = useNavigate();
	return (
		<>
			<h3>Registration</h3>
			<Formik
				validationSchema={validationSchema}
				onSubmit={(values: FormikValues) => {
					const newUser = {
						name: values[FORM_FIELDS.name],
						password: values[FORM_FIELDS.password],
						email: values[FORM_FIELDS.email],
					};
					return authAPI
						.register(newUser)
						.then((response) => {
							if (response.data.successful) {
								toast('Register successful!');
								navigate(routes.login);
							}
						})
						.catch((err) => {
							err.response.data.errors.map((error: string) =>
								toast.error(error)
							);
						});
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
							<Form.Group as={Col} md='6' controlId='userName'>
								<Form.Label>Name</Form.Label>

								<Form.Control
									type='text'
									placeholder={FORM_FIELDS.name}
									name={FORM_FIELDS.name}
									onBlur={handleBlur}
									value={values[FORM_FIELDS.name]}
									onChange={handleChange}
									isInvalid={
										touched[FORM_FIELDS.name] && !!errors[FORM_FIELDS.name]
									}
								/>
								<Form.Control.Feedback type='invalid'>
									{errors[FORM_FIELDS.name]}
								</Form.Control.Feedback>
							</Form.Group>
						</Row>
						<Row className='mb-3'>
							<Form.Group as={Col} md='6' controlId='email'>
								<Form.Label>Email</Form.Label>

								<Form.Control
									type='text'
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
									type='text'
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
							Registration
						</Button>
					</Form>
				)}
			</Formik>
			<div>
				If you have an account you can
				<Link to='/login'> Login </Link>
			</div>
		</>
	);
};
export default Registration;
