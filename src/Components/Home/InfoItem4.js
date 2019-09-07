import React, { Component } from 'react';

export default class InfoItem4 extends Component {
	render() {
		var Infos2 = [
			{
				id: 6,
				img : '/lib/imgs/home6.png',
				class1 : "info6",
				class2 : "pt-2 info6__fixsize",
			}
		];

		let elementsInfo2 = Infos2.map((Info, index) => {
			return	<div key={index} className={ Info.class2 }>
						<img src={ Info.img } alt={Info.class1} className={ Info.class1 }/>
					</div>
		});

		return (
				<div className="col-lg-6 col-md-6 col-12">
					{ elementsInfo2 }
				</div>
		);
	}
}
