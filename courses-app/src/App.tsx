import Header from './components/Header/Header';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Col, Container, Row } from 'react-bootstrap';
import { routes } from './common/constants/routes';
import { useEffect } from 'react';

import { authorsAPI } from './api/api';
import { setAuthorsAC } from './store/authors/actionCreators';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import { useAppDispatch } from './hooks';
import getMe from './store/user/thunk';

import { toggleIsFetching } from './store/user/actionCreator';
import { setCourses } from './store/courses/thunk';
import CourseForm from './components/CourseForm/CourseForm';
import NotFound from './common/NotFound/NotFound';

function App() {
	const token = localStorage.getItem('access_token');
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (token) {
			dispatch(getMe());
		} else {
			dispatch(toggleIsFetching(false));
		}
		dispatch(setCourses());
	}, [dispatch, token]);

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
											<CourseForm />
										</PrivateRoute>
									}
								/>
								<Route
									path={routes.courses + routes.update}
									element={
										<PrivateRoute>
											<CourseForm />
										</PrivateRoute>
									}
								/>
								<Route path='courses/:courseId' element={<CourseInfo />} />
								<Route path={routes.login} element={<Login />} />
								<Route path='/404' element={<NotFound />} />
							</Routes>
						</Col>
					</Row>
				</Container>
			</BrowserRouter>
		</div>
	);
}
export default App;
