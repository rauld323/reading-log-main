import React from 'react';

import './NewBook.css';
import BookForm from './BookForm';

const NewBook = props => {
	const saveBookDataHandler = enteredBookData => {
		const bookData = {
			...enteredBookData,
			id: Math.random().toString()
		};
		props.onAddBooks(bookData);
	};

	return (
		<div className='new-book'>
			<BookForm onSaveBookData={saveBookDataHandler} />
		</div>
	);
};

export default NewBook;
