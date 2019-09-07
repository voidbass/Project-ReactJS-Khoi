import React, { Component } from 'react';
import './style/ProductsDetail.scss'

export default class ProductsImage extends Component {
	render() {
		let temp = JSON.parse(localStorage.getItem('item-detail'));
        if (!temp) temp = [];
        let item = temp[temp.length-1];
		return (
			<div className="col-9 col-lg-6 p-2 text-center align-self-center">
				<img className=" products__image" src={"/lib/imgs/"+item.image} alt={item.image}/>
			</div>
		);
	}
}
