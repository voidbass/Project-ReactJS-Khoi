import React, { Component } from 'react';

export default class InfoItem3 extends Component {
	render() {
		var Infos1 = [
			{
				id: 7,
				img : '/lib/imgs/home7.png',
				class1 : "info7",
				class2 : "col-6 col-lg-6 pt-2 pl-0 info7__fixsize",
			},
			{
				id: 8,
				img : '/lib/imgs/home8.png',
				class1 : "info8",
				class2 : "col-6 col-lg-6 pt-2 info8__fixsize",
			},
			{
				id: 9,
				img : '/lib/imgs/home9.png',
				class1 : "info9",
				class2 : "col-6 col-lg-6 pl-0 pt-2 info9__fixsize",
			},
			{
				id: 10,
				img : '/lib/imgs/home10.png',
				class1 : "info10",
				class2 : "col-6 col-lg-6 pt-2 info10__fixsize",
			},
		];
			
		let elementsInfo2 = Infos1.map((Info, index) => {
			return (
				<div key={ Info.id } className={ Info.class2 }>
					<img src={ Info.img } alt={Info.class1} className={ Info.class1 }/>
				</div>
			)
		});


		return (
			<div className="col-lg-6 col-md-6 col-12 pl-0 row">
				{ elementsInfo2 }
			</div>
		);
	}
}

