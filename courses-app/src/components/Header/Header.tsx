import { Logo } from './components/Logo/Logo';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routes } from '../../common/constants/routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getCurrentUser } from '../../store/user/selectors';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/user/thunk';

const Header = () => {
	const user = useAppSelector(getCurrentUser);
	const dispatch = useAppDispatch();
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
										dispatch(logout());
									}}
								>
									Logout
								</Nav.Link>
							</Nav>
						) : !user.isFetching ? (
							<Nav>
								<Nav.Link as={Link} to={routes.login}>
									Login
								</Nav.Link>
								<Nav.Link as={Link} to={routes.registration}>
									Register
								</Nav.Link>
							</Nav>
						) : (
							<></>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default Header;
