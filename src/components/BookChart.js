import React from 'react';
import Chart from './Chart/Chart';

const BookChart = props => {
	const chartDataPoints = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'July', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sept', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 0 }
	];

	for (const book of props.books) {
		const bookMonth = book.date.getMonth();
		chartDataPoints[bookMonth].value += book.pages;
	}
	return <Chart dataPoints={chartDataPoints} />;
};

export default BookChart;
