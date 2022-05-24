import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';

import { placeholderText } from '../../../../common/constants/constants';
import Input from '../../../../common/Input/Input';
import { searchCoursesAC } from '../../../../store/courses/actionCreator';

const SearchBar = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const search = (text: string) => {
		dispatch(searchCoursesAC(text));
	};
	return (
		<div className='searchBar'>
			<Input
				placeholder={placeholderText.searchBar}
				onChange={(value) => {
					setValue(value);
					if (value === '') {
						search(value);
					}
				}}
			/>
			<Button onClick={() => search(value)}>
				Search
				<Search />
			</Button>
		</div>
	);
};
export default SearchBar;
