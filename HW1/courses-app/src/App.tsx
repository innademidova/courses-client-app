import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Col, Container, Row } from 'react-bootstrap';
import { routes } from './common/constants/routes';
import { useState } from 'react';
import { State } from './common/models/state';

function App() {
	const initialState: State = {};
	const state = useState<State>(initialState);
	return (
		<div>
			<BrowserRouter>
				<Header state={state} />
				<Container>
					<Row>
						<Col>
							<Routes>
								<Route path='/' element={<Navigate to='/courses' />} />
								<Route path={routes.registration} element={<Registration />} />
								<Route path={routes.courses + '/*'} element={<Courses />} />
								<Route path={routes.login} element={<Login state={state} />} />
							</Routes>
						</Col>
					</Row>
				</Container>
			</BrowserRouter>
		</div>
	);
}
export default App;
