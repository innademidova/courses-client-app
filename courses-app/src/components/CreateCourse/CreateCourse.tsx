import { placeholderText } from '../../common/constants/constants';

import { v4 as uuidv4 } from 'uuid';

import { convertMinutesToHours, dateGenerator } from '../../common/helpers';
import { AddAuthors } from '.';

import { useNavigate } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';
import validationSchema from './validation/validation';
import { FORM_FIELDS, FORM_INITIAL_VALUES } from './constants/constants';
import { Button, Form, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { createAuthorAC } from '../../store/authors/actionCreators';
import { useDispatch } from 'react-redux';
import { addCourseAC } from '../../store/courses/actionCreator';
import { useSelector } from 'react-redux';
import { getCoursesAuthors } from '../../store/authors/selectors';
import { AppDispatch } from '../../store';
import { routes } from '../../common/constants/routes';

const CreateCourse = () => {
	const dispatch = useDispatch<AppDispatch>();
	const coursesAuthors = useSelector(getCoursesAuthors);
	const createNewAuthor = (name: string) => {
		const newAuthor = { id: uuidv4(), name };
		dispatch(createAuthorAC(newAuthor));
	};
	const navigate = useNavigate();
	return (
		<Formik
			validationSchema={validationSchema}
			onSubmit={(values: FormikValues) => {
				const newCourse = {
					id: uuidv4(),
					title: values[FORM_FIELDS.title],
					description: values[FORM_FIELDS.description],
					duration: values[FORM_FIELDS.duration],
					creationDate: dateGenerator(),
					authors: coursesAuthors,
				};

				dispatch(addCourseAC(newCourse));
				navigate(routes.courses);
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
				handleReset,
			}) => (
				<Form noValidate onSubmit={handleSubmit}>
					<Row className='mb-3'>
						<Form.Group as={Col} md='4' controlId='validationFormikUsername'>
							<Form.Label>Title</Form.Label>

							<Form.Control
								type='text'
								placeholder={placeholderText.title}
								name={FORM_FIELDS.title}
								onBlur={handleBlur}
								value={values[FORM_FIELDS.title]}
								onChange={handleChange}
								isInvalid={
									touched[FORM_FIELDS.title] && !!errors[FORM_FIELDS.title]
								}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors[FORM_FIELDS.title]}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row className='mb-3'>
						<Form.Group as={Col} md='6' controlId='validationFormik03'>
							<Form.Label>Description</Form.Label>
							<Form.Control
								type='text'
								placeholder={placeholderText.description}
								name={FORM_FIELDS.description}
								value={values[FORM_FIELDS.description]}
								onBlur={handleBlur}
								onChange={handleChange}
								isInvalid={
									touched[FORM_FIELDS.description] &&
									!!errors[FORM_FIELDS.description]
								}
							/>

							<Form.Control.Feedback type='invalid'>
								{errors[FORM_FIELDS.description]}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row className='mb-3'>
						<Form.Group as={Col} md='6' controlId='validationFormik04'>
							<h4>Add author</h4>
							<Form.Label>Add author</Form.Label>
							<Form.Control
								type='text'
								placeholder={placeholderText.authorName}
								name={FORM_FIELDS.author}
								value={values[FORM_FIELDS.author]}
								onBlur={handleBlur}
								onChange={handleChange}
								isInvalid={
									touched[FORM_FIELDS.author] && !!errors[FORM_FIELDS.author]
								}
							/>

							<Form.Control.Feedback type='invalid'>
								{errors[FORM_FIELDS.author]}
							</Form.Control.Feedback>

							<Button
								type='button'
								onClick={() => {
									createNewAuthor(values[FORM_FIELDS.author]);
								}}
							>
								Create author{' '}
							</Button>
						</Form.Group>
					</Row>
					<Row className='mb-3'>
						<Form.Group as={Col} md='6' controlId='validationFormik04'>
							<Form.Label>Duration</Form.Label>
							<Form.Control
								type='text'
								placeholder={FORM_FIELDS.duration}
								name={FORM_FIELDS.duration}
								value={values[FORM_FIELDS.duration]}
								onBlur={handleBlur}
								onChange={handleChange}
								isInvalid={
									touched[FORM_FIELDS.duration] &&
									!!errors[FORM_FIELDS.duration]
								}
							/>

							<Form.Control.Feedback type='invalid'>
								{errors[FORM_FIELDS.duration]}
							</Form.Control.Feedback>
							<h4>
								Duration:
								{convertMinutesToHours(Number(values[FORM_FIELDS.duration]))}
							</h4>
						</Form.Group>
					</Row>

					<AddAuthors />
					<Button type='submit' disabled={!isValid || !coursesAuthors.length}>
						Create course
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default CreateCourse;
