import './Header.css';

import Button from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

import { buttonText } from '../../common/constants/constants';
import { BoxArrowLeft } from 'react-bootstrap-icons';

const Header = () => {
	return (
		<div>
			<div className='header'>
				<Logo />
				<div className='headerUserBlock'>
					<div className='userName'>Inna Demidova</div>
					<div className='headerButton'>
						<Button buttonText={buttonText.logOut} icon={<BoxArrowLeft />} />
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
};
export default Header;
