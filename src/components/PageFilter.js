import React from 'react';

import './PageFilter.css';

const PageFilter = props => {
	const filterChangeHandler = event => {
		props.onChangeFilter(event.target.value);
	};

	return (
		<div className='page-filter'>
			<div className='page-filter__control'>
				<label>Filter by year</label>
				<select
					value={props.selected}
					onChange={
						filterChangeHandler
					}>
					<option value='2022'>
						2022
					</option>
					<option value='2021'>
						2021
					</option>
					<option value='2020'>
						2020
					</option>
					<option value='2019'>
						2019
					</option>
				</select>
			</div>
		</div>
	);
};

export default PageFilter;
