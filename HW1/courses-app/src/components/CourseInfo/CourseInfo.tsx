import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {
	Button,
	Card,
	Container,
	Form,
	ListGroup,
	ListGroupItem,
	Nav,
} from 'react-bootstrap';

import { useParams } from 'react-router-dom';
interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}
interface Props {
	courses: Course[];
}
const CourseInfo = (props: Props) => {
	const { courseId } = useParams();
	const course = props.courses.find((course) => course.id === courseId);
	if (!course) {
		return <div>'Course not found!';</div>;
	}
	return (
		<Container>
			<Row>
				<Col>
					<Card style={{ width: '50rem' }} className='mx-auto'>
						<Card.Img
							variant='bottom'
							src='https://itproger.com/img/news/1580823783.jpg'
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
								<span className='d-inline ms-2'>{course.duration}</span>
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
		/* 	<Container>
			<Row>
				<Col>
					<h1 className='text-center'>{course.title}</h1>
				</Col>
			</Row>
			<Row>
				<Col>{course.description}</Col>
				<Col>
					<div>
						<b>ID:</b>

						<span className='d-inline ml-2'>{course.id}</span>
					</div>
					<div>
						<b>Duration:</b>
						<span className='d-inline ms-2'>{course.duration}</span>
					</div>
					<div>
						<b>Created:</b>
						<span className='d-inline ms-2'>{course.creationDate}</span>
					</div>
					<div>
						<b>Authors:</b>
						<span className='d-inline ms-2'>{course.authors}</span>
					</div>
				</Col>
			</Row>
		</Container> */
	);
};

export default CourseInfo;
