import { MIN_COURSE_DURATION } from '../constants/constants';
import * as yup from 'yup';
import {
	FORM_FIELDS,
	MAX_FULL_NAME_LENGTH,
	MIN_INPUT_LENGTH,
} from '../constants/constants';

export const validationSchema = yup.object({
	[FORM_FIELDS.author]: yup
		.string()
		.matches(
			/^(?:[A-Z][A-Za-z]{2,15} ?\b){2}$/,
			'Field should consist of 2 words, each of a capital letter. Minimum 2 characters in each word'
		)
		.max(MAX_FULL_NAME_LENGTH),
	[FORM_FIELDS.title]: yup
		.string()
		.min(MIN_INPUT_LENGTH, 'Field should be of minimum 2 characters length')
		.required('Title is required!'),
	[FORM_FIELDS.description]: yup
		.string()
		.min(MIN_INPUT_LENGTH, 'Field should be of minimum 2 characters length')
		.required('Description is required!'),
	[FORM_FIELDS.duration]: yup
		.number()
		.min(MIN_COURSE_DURATION, 'Courses duration must be at least 20 minutes.')
		.required(),
});
