import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { AuthorForm } from '../constants/constants';
import { addAuthor } from '../../../store/authors/thunk';
import { authorValidation } from '../validation/validation';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';

const CreateAuthor: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	return (
		<Formik
			validationSchema={authorValidation}
			onSubmit={(values: AuthorForm) => {
				dispatch(addAuthor(values));
			}}
			initialValues={new AuthorForm()}
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
					<Form.Group as={Col} md='6' controlId='author'>
						<h4>Add author</h4>
						<Form.Label>Add author</Form.Label>
						<Form.Control
							type='text'
							placeholder='Author name'
							name='name'
							value={values.name}
							onBlur={handleBlur}
							onChange={handleChange}
							isInvalid={touched.name && !!errors.name}
						/>

						<Form.Control.Feedback type='invalid'>
							{errors.name}
						</Form.Control.Feedback>

						<Button type='button' disabled={!isValid}>
							Create author{' '}
						</Button>
					</Form.Group>
				</Form>
			)}
		</Formik>
	);
};

export default CreateAuthor;
