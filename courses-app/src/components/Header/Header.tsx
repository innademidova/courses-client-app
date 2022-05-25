import { Logo } from './components/Logo/Logo';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routes } from '../../common/constants/routes';
import { authAPI } from '../../api/api';
import { localStorageKeys } from '../../common/constants/localStorage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/user/selectors';
import { logoutAC } from '../../store/user/actionCreator';

const Header = () => {
	const user = useSelector(getCurrentUser);
	const dispatch = useDispatch();
	const logout = () => {
		const token = localStorage.getItem('access_token');
		if (token) {
			authAPI.logout(token);
			dispatch(logoutAC());
		}
	};
	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<Container>
				<ToastContainer />
				<Navbar.Brand as={Link} to={routes.courses}>
					<Logo />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link as={Link} to={routes.courses}>
							Home
						</Nav.Link>
					</Nav>
					<Nav>
						{user.name ? (
							<Nav>
								<Nav.Link>{user.name}</Nav.Link>
								<Nav.Link
									onClick={() => {
										logout();
										localStorage.removeItem(localStorageKeys.token);
									}}
								>
									Logout
								</Nav.Link>
							</Nav>
						) : (
							<Nav>
								<Nav.Link as={Link} to={routes.login}>
									Login
								</Nav.Link>
								<Nav.Link as={Link} to={routes.registration}>
									Register
								</Nav.Link>
							</Nav>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default Header;
