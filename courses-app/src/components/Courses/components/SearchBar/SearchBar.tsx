import { useState } from 'react';
import { Search } from 'react-bootstrap-icons';

import { Button, Input } from '../../../../common';
import {
	buttonText,
	placeholderText,
} from '../../../../common/constants/constants';

type Props = {
	search: (value: string) => void;
};

const SearchBar = (props: Props) => {
	const [value, setValue] = useState('');
	return (
		<div className='searchBar' /* onSubmit={onFormSubmit} */>
			<Input
				placeholder={placeholderText.searchBar}
				onChange={(value) => {
					setValue(value);
					if (value === '') {
						props.search(value);
					}
				}}
			/>
			<Button
				buttonText={buttonText.searchBar}
				onClick={() => props.search(value)}
				icon={Search}
			/>
		</div>
	);
};
export default SearchBar;
