import { useEffect, useState } from 'react';

import { Button, Input } from '../../../common';

import {
	buttonText,
	inputName,
	labelText,
	placeholderText,
} from '../../../common/constants/constants';

const CreateAuthor = (props) => {
	const [inputValue, setValue] = useState('');
	const [formValid, setFormValid] = useState(false);
	useEffect(() => {
		if (props.createAuthorsError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [props.createAuthorsError]);
	return (
		<div className='createAuthor'>
			<h3>Add author</h3>
			<Input
				onBlur={props.onBlur}
				name={inputName.createAuthor}
				labelText={labelText.authorName}
				placeholder={placeholderText.authorName}
				value={inputValue}
				onChange={(event) => {
					const value = event.target.value;
					setValue(value);
					if (value.length < 2) {
						props.setCreateAuthorsError(
							'Invalid input. The number of characters must be more than 2.'
						);
					} else {
						props.setCreateAuthorsError('');
					}
				}}
			/>
			<Button
				disabled={!formValid}
				buttonText={buttonText.createAuthor}
				onClick={() => {
					props.setAuthors(inputValue);
					setFormValid(false);
					setValue('');
				}}
			/>
		</div>
	);
};
export default CreateAuthor;
