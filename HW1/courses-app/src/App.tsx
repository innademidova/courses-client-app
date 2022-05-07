import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Col, Container, Row } from 'react-bootstrap';
import { routes } from './common/constants/routes';

function App() {
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
								<Route path={routes.courses + '/*'} element={<Courses />} />
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
