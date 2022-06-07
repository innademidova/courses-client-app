import { convertMinutesToHours } from '../../../../common/helpers';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import './CourseCard.css';
import { useNavigate } from 'react-router-dom';
import { Eye, Pencil, Trash3 } from 'react-bootstrap-icons';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { deleteCourse } from '../../../../store/courses/thunk';
import { getCurrentUser } from '../../../../store/user/selectors';

export interface CourseCardInterface {
	id: string;
	courseAuthors: string[];
	title: string;
	description: string;
	creationDate: string;
	duration: number;
}
const CourseCard = (props: CourseCardInterface) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(getCurrentUser);
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
							<div className='mt-2'>
								<Button className='me-1' onClick={() => navigate(courseId)}>
									<Eye />
								</Button>
								{user.role === 'admin' ? (
									<>
										<Button
											onClick={() => navigate(`/courses/update/${courseId}`)}
											className='me-1'
										>
											<Pencil />
										</Button>
										<Button
											onClick={() => dispatch(deleteCourse(courseId))}
											className='me-1'
										>
											<Trash3 />
										</Button>
									</>
								) : (
									<></>
								)}
							</div>
						</Col>
					</Row>
				</Container>
			</Card.Body>
		</Card>
	);
};

export default CourseCard;
