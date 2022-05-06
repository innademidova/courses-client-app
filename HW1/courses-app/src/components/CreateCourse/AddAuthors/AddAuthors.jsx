import { Button } from '../../../common';
import { buttonText } from '../../../common/constants/constants';
import { PlusLg, Trash3 } from 'react-bootstrap-icons';
const AddAuthors = (props) => {
	return (
		<div>
			<h3>Authors</h3>
			{props.authors
				.filter((author) => !props.newCourseAuthors.includes(author.id))
				.map((author) => {
					return (
						<div key={author.id}>
							<label>{author.name}</label>
							<div>
								<Button
									onClick={() => {
										props.setNewCourseAuthors([
											...props.newCourseAuthors,
											author.id,
										]);
									}}
									buttonText={buttonText.addAuthor}
									icon={<PlusLg />}
								/>
							</div>
						</div>
					);
				})}
			<h3>Course Authors</h3>
			{props.authors
				.filter((author) => props.newCourseAuthors.includes(author.id))
				.map((author) => {
					return (
						<div key={author.id}>
							<label>{author.name}</label>
							<Button
								onClick={() => {
									props.setNewCourseAuthors([
										...props.newCourseAuthors.filter((id) => id !== author.id),
									]);
								}}
								buttonText={buttonText.deleteAuthor}
								icon={<Trash3 />}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default AddAuthors;
