import React, { useState } from 'react';

import './LibraryBookShelf.css';
import LibraryList from './LibraryList';
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
			<LibraryList items={filteredBooks} />
		</div>
	);
};

export default LibraryBookShelf;
