import './Button.css';
import DefaultButton from 'react-bootstrap/Button';
interface Props {
	icon?: any;
	buttonText: string;
	type: 'button' | 'submit' | 'reset' | undefined;
	variant?: 'primary' | 'danger';
	onClick?: () => void;
}
const Button = (props: Props) => {
	const { icon, buttonText, variant, ...other } = props;
	return (
		<DefaultButton variant={props.variant ?? 'primary'} {...other}>
			{icon}
			{buttonText}
		</DefaultButton>
	);
};
export default Button;
