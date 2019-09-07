import React, { Component } from 'react';
import InfoItem1 from './InfoItem1';
import InfoItem2 from './InfoItem2';
import InfoItem3 from './InfoItem3';
import InfoItem4 from './InfoItem4';


export default class Info extends Component {
	render() {
		return (
			<div className="hoc">
				<div className="row">
					<InfoItem1 />
					<InfoItem2 />
				</div>
				<div className="row">
					<InfoItem4 />
					<InfoItem3 />
				</div>
			</div>
		);
	}
}
