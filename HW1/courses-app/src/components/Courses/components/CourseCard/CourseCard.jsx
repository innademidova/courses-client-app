import { Button } from '../../../../common';
import { buttonText } from '../../../../common/constants/constants';
import { convertMinutesToHours } from '../../../../common/helpers/pipeDuration';
import { Card, Col, Container, Row } from 'react-bootstrap';

import './CourseCard.css';
import { useNavigate } from 'react-router-dom';

const CourseCard = (props) => {
	const navigate = useNavigate();
	const courseId = props.id;
	return (
		<Card className='courseCard'>
			<Card.Body>
				<Container>
					<Row>
						<Col sm={8}>
							<div className='aboutCourse'>
								<div className='courseCardTitle'>{props.title}</div>
								<div className='courseCardDescription'>{props.description}</div>
							</div>
						</Col>
						<Col sm={4}>
							<div>Duration: {convertMinutesToHours(props.duration)}</div>
							<div>Authors: {props.courseAuthors.join(', ')}</div>
							<div>Created: {props.creationDate}</div>
							<div className='showCourseButton'>
								<Button
									onClick={() => navigate(courseId)}
									buttonText={buttonText.showCourse}
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</Card.Body>
		</Card>
	);
};

export default CourseCard;
