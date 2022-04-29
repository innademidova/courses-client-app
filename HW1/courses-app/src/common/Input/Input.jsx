import './Input.css';

const Input = (props) => {
	return (
		<label>
			{props.labelText}
			<input
				className='input'
				name={props.name}
				placeholder={props.placeholder}
				onChange={(event) => {
					event.target.value = event.target.value.trimStart();
					props.onChange(event);
				}}
				onBlur={props.onBlur}
				value={props.value}
			/>
		</label>
	);
};
export default Input;
