import React, { useState } from 'react';

import './LibraryBookShelf.css';
import LibraryBook from './LibraryBook';
import PageFilter from './PageFilter';

const LibraryBookShelf = props => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	const filteredBooks = props.items.filter(book => {
		return book.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<PageFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>

			<div className='book_shelf'>
				{filteredBooks.map(book => (
					<LibraryBook
						key={book.id}
						title={book.title}
						pages={book.pages}
						date={book.date}
						author={book.author}
					/>
				))}
			</div>
		</div>
	);
};

export default LibraryBookShelf;
