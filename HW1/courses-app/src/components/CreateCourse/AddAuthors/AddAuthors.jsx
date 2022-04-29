import { Button } from '../../../common';
import { buttonText } from '../../../common/constants/constants';
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
							<Button
								onClick={() => {
									props.setNewCourseAuthors([
										...props.newCourseAuthors,
										author.id,
									]);
								}}
								buttonText={buttonText.addAuthor}
							/>
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
							/>
						</div>
					);
				})}
		</div>
	);
};

export default AddAuthors;
