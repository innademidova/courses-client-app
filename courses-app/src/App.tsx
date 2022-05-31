import Header from './components/Header/Header';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Col, Container, Row } from 'react-bootstrap';
import { routes } from './common/constants/routes';
import { useEffect } from 'react';

import { authorsAPI, coursesAPI } from './api/api';
import { setCoursesAC } from './store/courses/actionCreator';
import { setAuthorsAC } from './store/authors/actionCreators';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import { useAppDispatch, useAppSelector } from './hooks';
import getMe from './store/user/thunk';
import { getCurrentUser } from './store/user/selectors';
import { toggleIsFetching } from './store/user/actionCreator';

function App() {
	const token = localStorage.getItem('access_token');
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (token) {
			dispatch(getMe());
		} else {
			dispatch(toggleIsFetching(false));
		}
		coursesAPI.getCourses().then((data) => {
			dispatch(setCoursesAC(data));
		});
		authorsAPI.getAuthors().then((data) => {
			dispatch(setAuthorsAC(data));
		});
	}, [dispatch, token]);

	const user = useAppSelector(getCurrentUser);
	console.log(user);
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
									element={
										<PrivateRoute>
											<CreateCourse />
										</PrivateRoute>
									}
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
