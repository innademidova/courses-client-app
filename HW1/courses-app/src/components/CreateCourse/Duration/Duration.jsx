import { useState } from 'react';

import { Input } from '../../../common';
import {
	inputName,
	labelText,
	placeholderText,
} from '../../../common/constants/constants';

import { convertMinutesToHours } from '../../../common/helpers/pipeDuration';

const Duration = (props) => {
	const [inputValue, setValue] = useState('');
	props.newCourse.duration = inputValue;
	return (
		<div>
			<h3>Duration</h3>
			{props.durationDirty && props.durationError && (
				<div>{props.durationError}</div>
			)}
			<Input
				name={inputName.duration}
				onBlur={props.onBlur}
				value={inputValue}
				labelText={labelText.duration}
				placeholder={placeholderText.duration}
				onChange={(event) => {
					const value = event.target.value;
					setValue(value);
					if (!isFinite(value)) {
						props.setDurationError(
							'Invalid input! Enter the course duration in minutes.'
						);
					} else if (value < 20) {
						props.setDurationError(
							'Course duration cannot be less than 20 minutes!'
						);
					} else {
						props.setDurationError('');
					}
				}}
			/>
			<h3>Duration: {convertMinutesToHours(inputValue)}</h3>
		</div>
	);
};

export default Duration;
