import { PlusLg, Trash3 } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import {
	getAuthors,
	getCoursesAuthors,
} from '../../../store/authors/selectors';
import { useDispatch } from 'react-redux';
import { setCoursesAuthorsAC } from '../../../store/authors/actionCreators';
import { Button } from 'react-bootstrap';

const AddAuthors = () => {
	const authors = useSelector(getAuthors);
	const coursesAuthors = useSelector(getCoursesAuthors);
	const dispatch = useDispatch();

	return (
		<div>
			<h4>Authors</h4>
			{authors
				.filter((author) => !coursesAuthors.includes(author.id))
				.map((author) => {
					return (
						<div className='d-flex' key={author.id}>
							<label className='align-self-center'>{author.name}</label>
							<div>
								<Button
									type='button'
									onClick={() => {
										dispatch(
											setCoursesAuthorsAC([...coursesAuthors, author.id])
										);
									}}
									variant='link'
								>
									<PlusLg />
								</Button>
							</div>
						</div>
					);
				})}
			<h4>Course Authors</h4>
			{authors
				.filter((author) => coursesAuthors.includes(author.id))
				.map((author) => {
					return (
						<div className='d-flex' key={author.id}>
							<label className='align-self-center'>{author.name}</label>
							<Button
								type='button'
								onClick={() => {
									dispatch(
										setCoursesAuthorsAC([
											...coursesAuthors.filter((id) => id !== author.id),
										])
									);
								}}
								variant='link'
							>
								<Trash3 />
							</Button>
						</div>
					);
				})}
		</div>
	);
};

export default AddAuthors;
