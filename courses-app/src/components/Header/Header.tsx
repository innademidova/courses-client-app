import { Logo } from './components/Logo/Logo';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routes } from '../../common/constants/routes';
import { usersAPI } from '../../api/api';
import { useEffect } from 'react';
import { localStorageKeys } from '../../common/constants/localStorage';
import { State } from '../../common/models/state';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
	state: [State, React.Dispatch<React.SetStateAction<State>>];
};

const Header = (props: Props) => {
	const [state, setState] = props.state;
	useEffect(() => {
		usersAPI.getMe().then((response) => {
			if (response.data.successful) {
				setState({
					...state,
					user: {
						name: response.data.result.name,
						email: response.data.result.email,
					},
				});
			}
		});
	}, []);
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
						{state.user ? (
							<Nav>
								<Nav.Link>{state.user.name}</Nav.Link>
								<Nav.Link
									onClick={() => {
										localStorage.removeItem(localStorageKeys.token);
										setState({
											...state,
											user: undefined,
										});
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
