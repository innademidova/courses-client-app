import {
	buttonText,
	inputName,
	labelText,
	placeholderText,
} from '../../common/constants/constants';

import { v4 as uuidv4 } from 'uuid';

import { useEffect, useState } from 'react';

import { dateGenerator } from '../../common/helpers';

import { AddAuthors, CreateAuthor, Duration } from '.';
import { Button, Input } from '../../common';

const CreateCourse = (props) => {
	const setAuthors = (name) => {
		const newAuthor = { id: uuidv4(), name };
		props.setNewAuthor([...props.authors, newAuthor]);
		props.allAuthors.push(newAuthor);
	};
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [titleDirty, setTitleDirty] = useState(false);
	const [descriptionDirty, setDescriptionDirty] = useState(false);
	const [titleError, setTitleError] = useState('Field cannot be empty!');
	const [durationError, setDurationError] = useState('Field cannot be empty!');
	const [createAuthorsDirty, setCreateAuthorsDirty] = useState(false);
	const [createAuthorsError, setCreateAuthorsError] = useState(
		'Field cannot be empty!'
	);
	const [durationDirty, setDurationDirty] = useState(false);
	const [descriptionError, setDescriptionError] = useState(
		'Field cannot be empty!'
	);
	const [formValid, setFormValid] = useState(false);
	const [newCourseAuthors, setNewCourseAuthors] = useState([]);
	const newCourse = {
		id: uuidv4(),
		title,
		description,
		creationDate: dateGenerator(),
		duration: '',
		authors: newCourseAuthors,
	};
	useEffect(() => {
		if (
			titleError ||
			descriptionError ||
			durationError ||
			newCourse.authors.length < 1
		) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [titleError, descriptionError, durationError, newCourse.authors.length]);
	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'title':
				setTitleDirty(true);
				break;
			case 'description':
				setDescriptionDirty(true);
				break;
			case 'createAuthor':
				setCreateAuthorsDirty(true);
				break;
			case 'duration':
				setDurationDirty(true);
				break;
			default:
				return;
		}
	};
	return (
		<div>
			{titleDirty && titleError && <div>{titleError}</div>}
			<Input
				onBlur={(e) => blurHandler(e)}
				value={title}
				name={inputName.title}
				labelText={labelText.title}
				placeholder={placeholderText.title}
				onChange={(event) => {
					setTitle(event.target.value);
					if (event.target.value.length < 2) {
						setTitleError(
							'Invalid input. The number of characters must be more than 2.'
						);
					} else {
						setTitleError('');
					}
				}}
			/>
			{descriptionDirty && descriptionError && <div>{descriptionError}</div>}
			<Input
				onBlur={(e) => blurHandler(e)}
				name={inputName.description}
				labelText={labelText.description}
				placeholder={placeholderText.description}
				onChange={(event) => {
					setDescription(event.target.value);
					if (event.target.value.length < 2) {
						setDescriptionError(
							'Invalid input. The number of characters must be more than 2.'
						);
					} else {
						setDescriptionError('');
					}
				}}
			/>
			<div className='authorsBlock'>
				<CreateAuthor
					onBlur={blurHandler}
					createAuthorsError={createAuthorsError}
					createAuthorsDirty={createAuthorsDirty}
					setCreateAuthorsError={setCreateAuthorsError}
					allAuthors={props.allAuthors}
					authors={props.authors}
					setAuthors={setAuthors}
				/>
				<div className='duration'>
					<Duration
						onBlur={blurHandler}
						durationError={durationError}
						durationDirty={durationDirty}
						setDurationError={setDurationError}
						newCourse={newCourse}
					/>
				</div>
				<div className='addAuthors'>
					<AddAuthors
						newCourse={newCourse}
						authors={props.authors}
						newCourseAuthors={newCourseAuthors}
						setNewCourseAuthors={setNewCourseAuthors}
					/>
				</div>
				<div>
					<Button
						disabled={!formValid}
						buttonText={buttonText.createCourse}
						onClick={() => {
							props.setCourses([...props.courses, newCourse]);
							props.setIsAddCourse(false);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
