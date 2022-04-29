import './Header.css';

import Button from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

import { buttonText } from '../../common/constants/constants';

const Header = () => {
	return (
		<div>
			<div className='header'>
				<Logo />
				<div className='headerUserBlock'>
					<div className='userName'>Inna Demidova</div>
					<div className='headerButton'>
						<Button buttonText={buttonText.logOut} />
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
};
export default Header;
