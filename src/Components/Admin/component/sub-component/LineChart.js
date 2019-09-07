import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [{
		label: 'My First dataset',
		backgroundColor: 'rgba(255,99,132,0.2)',
		borderColor: 'rgba(255,99,132,1)',
		borderWidth: 1,
		hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		hoverBorderColor: 'rgba(255,99,132,1)',
		data: [65, 59, 80, 81, 56, 75, 49]
	}]
};

class LineChart extends Component {
	render() {
		return (
			<div className="area--chart mt-5 pt-5">
				<h4><i className="fas fa-chart-area"/> Area Chart Example</h4>
				<Line ref="chart" data={data} />
			</div>
		);
	}
}

export default LineChart;