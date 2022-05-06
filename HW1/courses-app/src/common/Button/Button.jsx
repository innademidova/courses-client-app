import './Button.css';
import DefaultButton from 'react-bootstrap/Button';
const Button = (props) => {
	const { icon, buttonText, variant, ...other } = props;
	return (
		<DefaultButton variant='primary' {...other}>
			{icon}
			{buttonText}
		</DefaultButton>
	);
};
export default Button;
