import React from 'react';

import LibraryBook from './LibraryBook';
import './LibraryList.css';

const LibraryList = props => {
	if (props.items.length === 0) {
		return (
			<h2 className='book-list-fallback'>
				No Books Found. Get to Reading!
			</h2>
		);
	}

	return (
		<ul className='book-list'>
			<div className='book_shelf'>
				{props.items.map(book => (
					<LibraryBook
						key={book.id}
						title={book.title}
						pages={book.pages}
						date={book.date}
						author={book.author}
					/>
				))}
			</div>
		</ul>
	);
};

export default LibraryList;
