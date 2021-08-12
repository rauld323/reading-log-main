import React, { useState } from 'react';

import './NewBook.css';
import BookForm from './BookForm';

const NewBook = props => {
	const [isEditing, setIsEditing] = useState(false);

	const saveBookDataHandler = enteredBookData => {
		const bookData = {
			...enteredBookData,
			id: Math.random().toString()
		};
		props.onAddBooks(bookData);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandle = () => {
		setIsEditing(false);
	};

	return (
		<div className='new-book'>
			{/* This is an example of opening and closing. Both
			lines check their condition and depends on line17
			and the useState on line 7 */}
			{!isEditing && (
				<button onClick={startEditingHandler}>
					Add New Book
				</button>
			)}
			{isEditing && (
				<BookForm
					onSaveBookData={
						saveBookDataHandler
					}
					onCancel={stopEditingHandle}
				/>
			)}
		</div>
	);
};

export default NewBook;
