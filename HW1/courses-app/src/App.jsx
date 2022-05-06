import Header from './components/Header/Header';
import './App.css';
import Courses from './components/Courses/Courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

function App() {
	return (
		<div className='appWrapper'>
			<BrowserRouter>
				<Routes>
					<Route path='registration' element={<Registration />} />
					<Route path='' element={<Header />} />
					<Route path='courses' element={<Courses />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default App;
