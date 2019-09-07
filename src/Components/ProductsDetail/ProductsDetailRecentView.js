import React, { Component } from 'react';
import ProductsDetailRecentViewContent from './ProductsDetailRecentViewContent';

export default class ProductsDetailRecentView extends Component {
	constructor(props){
		super(props);
		this.onShowDetail = this.onShowDetail.bind(this)
	}

	onShowDetail(item){
		return event => {
			let arrItemRecently = JSON.parse(localStorage.getItem('item-detail'));
			if (!arrItemRecently) arrItemRecently = [];

			if (arrItemRecently.length > 2) {
				arrItemRecently.shift();
			}

			let findItem = arrItemRecently.findIndex(i => i.id === item.id);
			if (findItem < 0) {
				arrItemRecently.push(item);
				localStorage.setItem('item-detail', JSON.stringify(arrItemRecently));
			}

			window.location.href = '/productsdetail?=';
		}
	}

	render() {
		let temp = JSON.parse(localStorage.getItem('item-detail'));
		temp.reverse();
        if (!temp) temp = [];
		return (
			<>
				<p className="font-weight-bold pl-0 m-0">SẢN PHẨM MUA NHIỀU</p>
				<hr/>
				{
					temp.map((item,index) => 	<ProductsDetailRecentViewContent	key={index}
																					id={item.id}
																					name={item.name}
																					image={item.image}
																					description={item.description}
																					price={item.price}
																					priceSale={item.priceSale}
																					onShowDetail={this.onShowDetail(item)}
												/>
					)
				}
			</>
		);
	}
}
