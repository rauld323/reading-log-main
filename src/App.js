import React, { useState } from 'react';

import LibraryBookShelf from './components/LibraryBookShelf';
import NewBooks from './components/NewBooks/NewBook';

const initialBooks = [
	{
		id: 'e1',
		title: 'Devil in the White City',
		pages: 127,
		date: new Date(2021, 5, 25),
		author: 'Erik Larson'
	},
	{
		id: 'e2',
		title: 'Devil in the White City',
		pages: 237,
		date: new Date(2021, 1, 25),
		author: 'Erik Larson'
	},
	{
		id: 'e3',
		title: 'Devil in the White City',
		pages: 447,
		date: new Date(2021, 11, 25),
		author: 'Erik Larson'
	},
	{
		id: 'e4',
		title: 'Devil in the White City',
		pages: 20,
		date: new Date(2021, 4, 25),
		author: 'Erik Larson'
	}
];

function App() {
	const [books, setBooks] = useState(initialBooks);

	const addBookHandler = book => {
		setBooks(prevBooks => {
			return [book, ...prevBooks];
		});
	};

	return (
		<div className='App'>
			<div>
				<h2>Reading Log</h2>
				<NewBooks onAddBooks={addBookHandler} />
				<LibraryBookShelf items={books} />
			</div>
		</div>
	);
}

export default App;
