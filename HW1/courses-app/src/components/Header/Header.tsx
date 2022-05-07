import { Logo } from './components/Logo/Logo';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routes } from '../../common/constants/routes';

const Header = () => {
	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<Container>
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
						<Nav.Link as={Link} to={routes.login}>
							Login
						</Nav.Link>
						<Nav.Link as={Link} to={routes.registration}>
							Register
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default Header;
