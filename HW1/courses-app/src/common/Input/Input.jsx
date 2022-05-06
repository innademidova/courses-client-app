import { Form } from 'react-bootstrap';

const Input = (props) => {
	const { labelText, onChange, ...other } = props;
	return (
		<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
			<Form.Label>{labelText}</Form.Label>
			<Form.Control
				{...other}
				onChange={(event) => {
					event.target.value = event.target.value.trimStart();
					onChange(event);
				}}
			/>
		</Form.Group>
	);
};
export default Input;
