import * as yup from 'yup';
import { FORM_FIELDS, MIN_PASSWORD_LENGTH } from '../constants/constants';

const validationSchema = yup.object({
	[FORM_FIELDS.email]: yup
		.string()
		.matches(
			/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
			'Email is invalid!'
		)
		.required('Enter email!'),
	[FORM_FIELDS.password]: yup
		.string()
		.min(
			MIN_PASSWORD_LENGTH,
			'Password should be of minimum 6 characters length'
		)
		.required('Enter password!'),
});

export default validationSchema;
