import './LibraryBook.css';
import BookDate from './BookDate';
import React from 'react';

const LibraryBook = props => {
	return (
		<div>
			<div className='book_card'>
				<BookDate date={props.date} />
				<div className='book_info'>
					<h1>{props.title}</h1>
					<h3>{props.author}</h3>
					<h2>pages {props.pages}</h2>
				</div>
			</div>
		</div>
	);
};

export default LibraryBook;
