import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
	return (
		<Container>
			<Row>
				<Col>
					<div className='appWrapper'>
						<Header />
						<BrowserRouter>
							<Routes>
								<Route path='registration' element={<Registration />} />
								<Route path='/courses' element={<Courses />} />
								<Route path='/login' element={<Login />} />
							</Routes>
						</BrowserRouter>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
export default App;
