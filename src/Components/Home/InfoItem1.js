import React, { Component } from 'react';

export default class InfoItem1 extends Component {
	render() {
		var Infos1 = [
			{
				id : 1,
				img : '/lib/imgs/home1.png',
				class1 : "info1",
				class2 : "col-6 col-lg-6 info1__fixsize",
			},
			{
				id: 2,
				img : '/lib/imgs/home2.png',
				class1 : "info2",
				class2 : "col-6 col-lg-6 pl-0 info2__fixsize",
			},
			{
				id: 3,
				img : '/lib/imgs/home3.png',
				class1 : "info3",
				class2 : "col-6 col-lg-6 pt-2 info3__fixsize",
			},
			{
				id: 4,
				img : '/lib/imgs/home4.png',
				class1 : "info4",
				class2 : "col-6 col-lg-6 pt-2 info4__fixsize",
			}
		]
			
		let elementsInfo1 = Infos1.map((Info, index) => {
			return (
				<div key={ Info.id } className={ Info.class2 }>
					<img src={ Info.img } alt={Info.class1} className={Info.class1 }/>
				</div>
			)
		});


		return (
			<div className="col-lg-6 col-md-6 col-12 row pr-0">
				{ elementsInfo1 }
			</div>
		);
	}
}
