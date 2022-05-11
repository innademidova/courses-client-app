import {
	buttonText,
	inputName,
	labelText,
	placeholderText,
} from '../../common/constants/constants';

import { v4 as uuidv4 } from 'uuid';

import React, { useEffect, useState } from 'react';

import { dateGenerator } from '../../common/helpers';

import { AddAuthors, CreateAuthor, Duration } from '.';
import { Button, Input } from '../../common';
import { Author } from '../../common/models/author';
import { Course } from '../../common/models/course';
import { Navigate, useNavigate } from 'react-router-dom';

type Props = {
	authors: Author[];
	setNewAuthor: React.Dispatch<React.SetStateAction<Author[]>>;
	courses: Course[];
	setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
	setIsAddCourse: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateCourse = (props: Props) => {
	const setAuthors = (name: string) => {
		const newAuthor = { id: uuidv4(), name };
		props.setNewAuthor([...props.authors, newAuthor]);
		props.authors.push(newAuthor);
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
	const [newCourseAuthors, setNewCourseAuthors] = useState<string[]>([]);
	const newCourse = {
		id: uuidv4(),
		title,
		description,
		duration: 0,
		creationDate: dateGenerator(),
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
	const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
	const navigate = useNavigate();
	return (
		<div>
			{titleDirty && titleError && <div>{titleError}</div>}
			<Input
				onBlur={(e) => blurHandler(e)}
				value={title}
				name={inputName.title}
				labelText={labelText.title}
				placeholder={placeholderText.title}
				onChange={(value) => {
					setTitle(value);
					if (value.length < 2) {
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
				onChange={(value) => {
					setDescription(value);
					if (value.length < 2) {
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
							navigate('/courses');
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
