import { useState } from 'react';
import { Search } from 'react-bootstrap-icons';

import { Button, Input } from '../../../../common';
import {
	buttonText,
	placeholderText,
} from '../../../../common/constants/constants';

const SearchBar = (props) => {
	/* const onFormSubmit = (e) => {
		e.preventDefault();
		props.search(value);
	}; */

	const [value, setValue] = useState('');
	return (
		<div className='searchBar' /* onSubmit={onFormSubmit} */>
			<Input
				placeholder={placeholderText.searchBar}
				onChange={(event) => {
					const currentValue = event.target.value;
					setValue(currentValue);
					if (currentValue === '') {
						props.search(currentValue);
					}
				}}
			/>
			<Button
				buttonText={buttonText.searchBar}
				onClick={() => props.search(value)}
				icon={<Search />}
			/>
		</div>
	);
};
export default SearchBar;
