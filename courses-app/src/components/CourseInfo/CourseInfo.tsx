import { Nav, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Backspace } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { routes } from '../../common/constants/routes';
import { convertMinutesToHours } from '../../common/helpers';
import { getCourses } from '../../store/courses/selectors';

const CourseInfo = () => {
	const courses = useSelector(getCourses);
	const { courseId } = useParams();
	const course = courses.find((course) => course.id === courseId);
	if (!course) {
		return <div>'Course not found!'</div>;
	}
	return (
		<Container>
			<Nav className='mx-auto'>
				<Nav.Link as={Link} to={routes.courses}>
					{<Backspace />} Back to courses
				</Nav.Link>
			</Nav>
			<Row>
				<Col>
					<Card style={{ width: '50rem' }} className='mx-auto'>
						<Card.Img
							variant='bottom'
							src='https://cdn.lifehacker.ru/wp-content/uploads/2021/10/1471328153_1633512244.jpg'
						/>
						<Card.Body>
							<Card.Title className='text-center'>{course.title}</Card.Title>
							<Card.Text>{course.description}</Card.Text>
						</Card.Body>
						<ListGroup>
							<ListGroupItem>
								<b>ID:</b>

								<span className='d-inline ms-2'>{course.id}</span>
							</ListGroupItem>
							<ListGroupItem>
								<b>Duration:</b>
								<span className='d-inline ms-2'>
									{convertMinutesToHours(course.duration)}
								</span>
							</ListGroupItem>
							<ListGroupItem>
								<b>Created:</b>
								<span className='d-inline ms-2'>{course.creationDate}</span>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default CourseInfo;
