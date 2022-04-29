import { Button } from '../../../../common';
import { buttonText } from '../../../../common/constants/constants';
import { convertMinutesToHours } from '../../../../common/helpers/pipeDuration';

import './CourseCard.css';

const CourseCard = (props) => {
	return (
		<div className='courseCard'>
			<div className='aboutCourse'>
				<div className='courseCardTitle'>{props.title}</div>
				<div className='courseCardDescription'>{props.description}</div>
			</div>
			<div className='courseInfo'>
				<div>Duration: {convertMinutesToHours(props.duration)}</div>
				<div>Authors: {props.courseAuthors.join(', ')}</div>
				<div>Created: {props.creationDate}</div>
				<div className='showCourseButton'>
					<Button buttonText={buttonText.showCourse} />
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
