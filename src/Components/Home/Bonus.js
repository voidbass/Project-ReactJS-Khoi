import React, { Component } from 'react';

export default class Bonus extends Component {
	render() {
		var Bonuses = [
			{
				id : 1,
				class : "col-sm-12 col-md-4 col-lg-4 pt-2 pb-2",
				icon : "fas fa-plane center font-20",
				text : "Miễn phí vận chuyển"
			},
			{
				id : 2,
				class : "col-sm-12 col-md-4 col-lg-4 pt-2 pb-2 Home__Bonuses",
				icon : "fas fa-gift center font-20",
				text : "Nhận ngay quà tặng trị giá 350.000đ"
			},
			{
				id : 3,
				class : "col-sm-12 col-md-4 col-lg-4 pt-2 pb-2 Home__Bonuses",
				icon : "fas fa-star center font-20",
				text : "Giảm 30% cho đơn hàng trên 5.000.000đ"
			}
		];

		let elementsBonus = Bonuses.map((Bonus, index) => {
			return	<li key={ Bonus.id } className={ Bonus.class }>
						<i className={ Bonus.icon } />
						<br />
						<p>{ Bonus.text }</p>
					</li>
		});

		return (
			<div className="pt-3 pb-3">
				<ul className=" row hoc text-center">
			        { elementsBonus }
			    </ul>
			</div>
		);
	}
}
