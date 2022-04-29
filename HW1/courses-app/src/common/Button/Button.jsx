import './Button.css';
const Button = (props) => {
	return (
		<button
			className='button'
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.buttonText}
		</button>
	);
};
export default Button;
