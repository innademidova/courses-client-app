import { convertMinutesToHours } from '../../common/helpers';
import { AddAuthors } from '.';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';
import { validationSchema } from './validation/validation';
import { FORM_FIELDS, FORM_INITIAL_VALUES } from './constants/constants';
import { Button, Form, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCoursesAuthors } from '../../store/authors/selectors';
import { AppDispatch } from '../../store';
import { routes } from '../../common/constants/routes';
import {
	addNewCourse,
	getCourse,
	updateCourse,
} from '../../store/courses/thunk';
import Preloader from '../../common/Preloader/Preloader';
import { useAppSelector } from '../../hooks';
import {
	getCoursesState,
	getCurrentCourse,
} from '../../store/courses/selectors';
import React, { useEffect } from 'react';
import { addAuthor } from '../../store/authors/thunk';

const CourseForm = () => {
	const { courseId } = useParams();
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const coursesAuthors = useSelector(getCoursesAuthors);
	const { isFetching } = useAppSelector(getCoursesState);
	const course = useAppSelector(getCurrentCourse);
	useEffect(() => {
		if (courseId) {
			dispatch(getCourse(courseId));
		}
	}, [dispatch, courseId]);
	if (courseId) {
		if (isFetching) {
			return <Preloader />;
		}
		if (!course) {
			return <Navigate to='/404' />;
		}
	}
	return (
		<Formik
			validationSchema={validationSchema}
			onSubmit={(values: FormikValues) => {
				const newCourse = {
					title: values[FORM_FIELDS.title],
					description: values[FORM_FIELDS.description],
					duration: +values[FORM_FIELDS.duration],
					authors: coursesAuthors,
				};
				if (courseId) {
					dispatch(updateCourse(courseId, newCourse));
				} else {
					dispatch(addNewCourse(newCourse));
				}
				navigate(routes.courses);
			}}
			initialValues={
				courseId && course
					? {
							title: course.title,
							description: course.description,
							duration: course.duration.toString(),
							author: '',
					  }
					: FORM_INITIAL_VALUES
			}
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
				<form noValidate onSubmit={handleSubmit}>
					<Row className='mb-3'>
						<Form.Group as={Col} md='4' controlId='title'>
							<Form.Label>Title</Form.Label>

							<Form.Control
								type='text'
								placeholder={FORM_FIELDS.title}
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
						<Form.Group as={Col} md='6' controlId='description'>
							<Form.Label>Description</Form.Label>
							<Form.Control
								type='text'
								placeholder={FORM_FIELDS.description}
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
						<Form.Group as={Col} md='6' controlId='author'>
							<Form.Label>Add author</Form.Label>
							<Form.Control
								type='text'
								placeholder={FORM_FIELDS.author}
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
								disabled={
									!!errors[FORM_FIELDS.author] ||
									!values[FORM_FIELDS.author].length
								}
								onClick={() => dispatch(addAuthor(values[FORM_FIELDS.author]))}
							>
								Create author
							</Button>
						</Form.Group>
					</Row>
					<Row className='mb-3'>
						<Form.Group as={Col} md='6' controlId='duration'>
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
						{courseId ? 'Update Course' : 'Create course'}
					</Button>
				</form>
			)}
		</Formik>
	);
};

export default CourseForm;
