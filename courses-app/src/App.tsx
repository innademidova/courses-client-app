import Header from './components/Header/Header';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Col, Container, Row } from 'react-bootstrap';
import { routes } from './common/constants/routes';
import { useEffect } from 'react';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import AdminPrivateRoute from './components/PrivateRouter/AdminPrivateRouter';
import { useAppDispatch } from './hooks';

import { toggleIsFetching } from './store/user/actionCreator';
import { setCourses } from './store/courses/thunk';
import CourseForm from './components/CourseForm/CourseForm';
import NotFound from './common/NotFound/NotFound';
import { setAuthors } from './store/authors/thunk';
import { getMe } from './store/user/thunk';
import AnonymousPrivateRoute from './components/PrivateRouter/AnonymousPrivateRouter';

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
		dispatch(setAuthors());
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
								<Route
									path={routes.login}
									element={
										<AnonymousPrivateRoute>
											<Login />
										</AnonymousPrivateRoute>
									}
								/>
								<Route
									path={routes.registration}
									element={
										<AnonymousPrivateRoute>
											<Registration />
										</AnonymousPrivateRoute>
									}
								/>
								<Route path={routes.courses} element={<Courses />} />
								<Route
									path={routes.courses + routes.add}
									element={
										<AdminPrivateRoute>
											<CourseForm />
										</AdminPrivateRoute>
									}
								/>
								<Route
									path={routes.courses + routes.update}
									element={
										<AdminPrivateRoute>
											<CourseForm />
										</AdminPrivateRoute>
									}
								/>
								<Route path='courses/:courseId' element={<CourseInfo />} />
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
