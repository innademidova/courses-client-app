import './Button.css';
import DefaultButton from 'react-bootstrap/Button';
import { Icon, Icon123 } from 'react-bootstrap-icons';
import React from 'react';
interface Props {
	icon?: Icon;
	buttonText?: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	variant?: 'primary' | 'danger';
	onClick?: () => void;
	disabled?: boolean;
}
const Button = (props: Props) => {
	const { icon, buttonText, variant, ...other } = props;
	return (
		<DefaultButton variant={props.variant ?? 'primary'} {...other}>
			<>
				{icon ? React.createElement(icon) : ''}
				{buttonText}
			</>
		</DefaultButton>
	);
};
export default Button;
