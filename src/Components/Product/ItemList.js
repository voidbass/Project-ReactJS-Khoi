import React, { Component } from 'react';
import Button from './Button';

export default class ItemList extends Component {
	render() {
		const { 
			id,
			image,
			name,
			productName,
            description,
            price,
            priceSale,
            onShowDetail,
            onAddCart } = this.props;
		return (
			<li key={id} className={"mt-4 mr-0 ml-0 p-0 d-none d-lg-block text-center triggeritem col-12 col-md-6 col-lg-4 "}>
				<a onClick={onShowDetail} href={'/productsdetail?='+id}>
					<img alt={image} className="item__height" src={"/lib/imgs/"+image} />
				</a>
				<hr className="hr__dotted" />
				<p className="nospace" style={{ color: "#c1c1c1" }}>{name}</p>
				<p className="m-0 p-0"> {description} </p>
				<hr className="hr__solid" />
				<p className="m-0 p-0 font-weight-bold"> {productName} </p>
				<p className="m-0 p-0 d-inline">{price}.000<sup>đ</sup></p>
				<p className="m-0 p-0 d-inline">{priceSale}.000<sup>đ</sup></p>
				<div className="d-block">
					<Button onAddCart={onAddCart}/>
				</div>
			</li>
		);
	}
}
