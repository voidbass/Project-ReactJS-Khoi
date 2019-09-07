import React, { Component } from 'react';

export default class InfoItem2 extends Component {
	render() {
		var Infos2 = [
			{
				id: 5,
				img : '/lib/imgs/home5.png',
				class1 : "info5",
				class2 : "info5__fixsize",
			},

		];

		let elementsInfo1 = Infos2.map((Info, index) => {
			return (
				<div key={index} className={ Info.class2 }>
					<img src={ Info.img } alt={Info.class1} className={ Info.class1 }/>
				</div>
			)
		});

		return (
				<div className="col-lg-6 col-md-6 col-12">
					{ elementsInfo1 }
				</div>
		);
	}
}
