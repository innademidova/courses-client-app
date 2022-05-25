import Header from './components/Header/Header';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Col, Container, Row } from 'react-bootstrap';
import { routes } from './common/constants/routes';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { authorsAPI, coursesAPI } from './api/api';
import { setCoursesAC } from './store/courses/actionCreator';
import { setAuthorsAC } from './store/authors/actionCreators';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		coursesAPI.getCourses().then((data) => {
			dispatch(setCoursesAC(data));
		});
		authorsAPI.getAuthors().then((data) => {
			dispatch(setAuthorsAC(data));
		});
	}, [dispatch]);
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Container>
					<Row>
						<Col>
							<Routes>
								<Route path='/' element={<Navigate to='/courses' />} />
								<Route path={routes.registration} element={<Registration />} />
								<Route path={routes.courses} element={<Courses />} />
								<Route
									path={routes.courses + routes.add}
									element={<CreateCourse />}
								/>
								<Route path='courses/:courseId' element={<CourseInfo />} />
								<Route path={routes.login} element={<Login />} />
							</Routes>
						</Col>
					</Row>
				</Container>
			</BrowserRouter>
		</div>
	);
}
export default App;
