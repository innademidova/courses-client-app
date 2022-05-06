import { Form } from 'react-bootstrap';

interface Props {
	labelText: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
}

const Input = (props: Props) => {
	const { labelText, onChange, ...other } = props;
	return (
		<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
			<Form.Label>{labelText}</Form.Label>
			<Form.Control
				{...other}
				onChange={(event) => {
					event.target.value = event.target.value.trimStart();
					onChange(event.target.value);
				}}
			/>
		</Form.Group>
	);
};
export default Input;
