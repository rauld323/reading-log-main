import React, { useState } from 'react';
import './BookForm.css';

const BookForm = props => {
	// Step 3
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAuthor, setEnteredAuthor] = useState('');
	const [enteredPages, setEnteredPages] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// Step 2
	const titleChangeHandler = event => {
		setEnteredTitle(event.target.value);
	};

	const authorChangeHandler = event => {
		setEnteredAuthor(event.target.value);
	};

	const pagesChangeHandler = event => {
		setEnteredPages(event.target.value);
	};

	const dateChangeHandler = event => {
		setEnteredDate(event.target.value);
	};

	// step 4
	const submitHandler = event => {
		event.preventDefault();

		const bookData = {
			title: enteredTitle,
			author: enteredAuthor,
			pages: enteredPages,
			date: new Date(enteredDate)
		};

		props.onSaveBookData(bookData);
		setEnteredTitle('');
		setEnteredAuthor('');
		setEnteredPages('');
		setEnteredDate('');
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='new-book-controls'>
					<div className='new-book-control'>
						<label>Title</label>
						{/* Step 1  */}
						<input
							type='text'
							value={
								enteredTitle
							}
							onChange={
								titleChangeHandler
							}
						/>
					</div>
					<div className='new-book-control'>
						<label>
							Author
						</label>
						<input
							type='text'
							value={
								enteredAuthor
							}
							onChange={
								authorChangeHandler
							}
						/>
					</div>
					<div className='new-book-control'>
						<label>Pages</label>
						<input
							type='number'
							min='10'
							max='50,000'
							value={
								enteredPages
							}
							onChange={
								pagesChangeHandler
							}
						/>
					</div>
					<div className='new-book-control'>
						<label>Date</label>
						<input
							type='date'
							min='2019-01-01'
							max='2022-12-31'
							value={
								enteredDate
							}
							onChange={
								dateChangeHandler
							}
						/>
					</div>
				</div>
				<div className='new-book-actions'>
					<button type='submit'>
						Add New Book
					</button>
				</div>
			</form>
		</div>
	);
};

export default BookForm;
