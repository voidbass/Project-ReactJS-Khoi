import React, { Component } from 'react';

export default class MenuItem extends Component {
	render() {
		const { count, image, price, 
			productName, onRemoveCart } = this.props;
		return (
			<div className="mt-lg-1 pt-lg-1 mt-2 row">
				<div className="text-center col-5">
					<img className="img-fluid menu__image" src={'/lib/imgs/'+image} alt="Product" />
					
				</div>
				<div className="col-1 p-0">
					<span className="badge badge-pill badge-success">{count}</span>
				</div>
				<div className="col-4">
					<span className="pl-2 d-block">{productName}</span>
					<span className="pl-2 d-block">{price*count}.000<sup>đ</sup></span>
				</div>
				<button onClick={onRemoveCart} className="close col-2" arial-label="Close">
					<span aria-hidden="true">×</span>
				</button>
			</div>
		);
	}
}
