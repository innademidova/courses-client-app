import { Button } from '../../common';
import { SearchBar, CourseCard } from '.';
import { buttonText } from '../../common/constants/constants';
import { PlusLg } from 'react-bootstrap-icons';

const ExistedCourses = (props) => {
	const search = (value) => {
		const valueToLowerCase = value.toLowerCase();
		const filteredCourses = props.allCourses.filter((course) => {
			return (
				course.title.toLowerCase().includes(valueToLowerCase) ||
				course.id.toLowerCase().includes(valueToLowerCase)
			);
		});
		props.setCourses(filteredCourses);
	};
	return (
		<div>
			<SearchBar search={search} />
			{props.courses.map((item) => (
				<CourseCard
					key={item.id}
					courseAuthors={item.authors.map((id) => {
						return props.allAuthors
							.filter((author) => id === author.id)
							.map((el) => el.name);
					})}
					{...item}
				/>
			))}
			<Button
				buttonText={buttonText.addNewCourse}
				onClick={() => {
					props.setIsAddCourse(true);
				}}
				icon={<PlusLg />}
			/>
		</div>
	);
};

export default ExistedCourses;
