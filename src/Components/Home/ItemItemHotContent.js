import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class ItemItemHotContent extends Component {
	render() {
		const {
			id,
			productName,
			image,
			name,
			description,
			price,
			priceSale,
			onShowDetail,
			onAddCart } = this.props;
		return (
			<li key={id} className={"mt-4 mr-0 ml-0 p-0 d-none d-lg-block text-center triggeritem col-12 col-md-6 col-lg-2 "}>
				<Link to={"/productsdetail?=" + id}>
					<img onClick={onShowDetail} alt={image} className="item__height" src={"/lib/imgs/" + image} />
				</Link>
				<hr className="hr__dotted" />
				<p className="nospace" style={{ color: "#c1c1c1" }}>{name}</p>
				<p className="m-0 p-0"> {description} </p>
				<hr className="hr__solid" />
				<p className="m-0 p-0 font-weight-bold"> {productName} </p>
				<p className="m-0 p-0 d-inline">{price}.000<sup>đ</sup></p>
				<p className="m-0 p-0 d-inline">{priceSale}.000<sup>đ</sup></p>
				<div className="d-block">
					<Button onAddCart={onAddCart} />
				</div>
			</li>
		);
	}
}
