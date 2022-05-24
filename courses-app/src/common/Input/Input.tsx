import { Form } from 'react-bootstrap';

interface Props {
	labelText?: string;
	placeholder: string;
	value?: string;
	onChange: (value: string) => void;
	type?: 'password' | 'text' | 'email' | 'submit';
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
}

const Input = (props: Props) => {
	const { labelText, onChange, ...other } = props;
	return (
		<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
			<Form.Label>{labelText}</Form.Label>
			<Form.Control
				{...other}
				onChange={(event) => {
					onChange(event.target.value);
				}}
				onBlur={props.onBlur as any}
			/>
		</Form.Group>
	);
};
export default Input;
