import { convertMinutesToHours } from '../../../../common/helpers/pipeDuration';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import './CourseCard.css';
import { useNavigate } from 'react-router-dom';
import { Eye, Pencil, Trash3 } from 'react-bootstrap-icons';

export interface CourseCardInterface {
	id: string;
	courseAuthors: string[];
	title: string;
	description: string;
	creationDate: string;
	duration: number;
}
const CourseCard = (props: CourseCardInterface) => {
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
							<div className='courseButton'>
								<Button onClick={() => navigate(courseId)}>
									Show course
									<Eye />
								</Button>
								<Button>
									<Pencil />
								</Button>
								<Button>
									<Trash3 />
								</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</Card.Body>
		</Card>
	);
};

export default CourseCard;
