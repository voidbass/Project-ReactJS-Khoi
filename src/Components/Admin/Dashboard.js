import React, { Component } from 'react';
import LineChart from "./component/sub-component/LineChart";
import LayoutAdmin from "./component/LayoutAdmin";

class Dashboard extends Component {
	render() {
		return (
			<LayoutAdmin>
				<LineChart/>
			</LayoutAdmin>
		);
	}
}

export default Dashboard;