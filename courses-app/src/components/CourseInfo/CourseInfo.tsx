import { Nav, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Backspace } from 'react-bootstrap-icons';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { routes } from '../../common/constants/routes';
import { convertMinutesToHours } from '../../common/helpers';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
	getCoursesState,
	getCurrentCourse,
} from '../../store/courses/selectors';
import { getCourse } from '../../store/courses/thunk';
import Preloader from '../../common/Preloader/Preloader';

const CourseInfo = () => {
	const { courseId } = useParams();
	const { isFetching } = useAppSelector(getCoursesState);
	const course = useAppSelector(getCurrentCourse);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (courseId) {
			dispatch(getCourse(courseId));
		}
	}, [dispatch, courseId]);

	if (isFetching) {
		return <Preloader />;
	}
	if (!course) {
		return <Navigate to='/404' />;
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
