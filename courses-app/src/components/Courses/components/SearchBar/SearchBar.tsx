import { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { searchCoursesAC } from '../../../../store/courses/actionCreator';

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();
	const search = (text: string) => {
		dispatch(searchCoursesAC(text));
	};
	return (
		<InputGroup className='my-3'>
			<FormControl
				placeholder='Search'
				aria-label='search'
				aria-describedby='search2'
				onChange={(event) => {
					const value = event.target.value;
					setSearchValue(value);
					if (value === '') {
						search(value);
					}
				}}
			/>
			<Button
				onClick={() => search(searchValue)}
				variant='outline-primary'
				id='search2'
			>
				<Search />
			</Button>
		</InputGroup>
	);
};
export default SearchBar;
