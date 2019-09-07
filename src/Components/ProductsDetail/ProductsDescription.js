import React, { Component } from 'react';

export default class ProductsDescription extends Component {
	render() {
		let temp = JSON.parse(localStorage.getItem('item-detail'));
        if (!temp) temp = [];
        let item = temp[temp.length-1];
		return (
			<>
				<h3 className="font-weight-bold">{item.productNameList}</h3>
				<h5 className="font-weight-bold">{item.description}</h5>
				<p className="font-weight-bold font-italic nospace inline">{item.price}.000đ</p>
				<div className="nospace inline font-italic outspace-10">{item.priceSale}.000đ</div>
				<p>{item.descriptionList}</p>
			</>
		);
	}
}
