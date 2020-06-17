import React, { Component } from 'react';
import './style/ProductsDetail.scss'
import { Link } from 'react-router-dom'

export default class ProductsDetailHotSaleContent extends Component {
	render() {
		const {
			id,
			image,
			description,
			price,
			onShowDetail
		} = this.props;
		return (
			<>
				<Link onClick={onShowDetail} to={'/productsdetail?=' + id} className="col-lg-4 p-0 text-center align-self-center">
					<img className="products__detail__hotsale__image" src={"/lib/imgs/" + image} alt={image} />
				</Link>
				<div className="col-lg-8 p-0 pt-2">
					<p className="font-weight-bold">{description}</p>
					<pre>
						<i className="fa fa-heart"></i>
						<i className="fa fa-heart"></i>
						<i className="fa fa-heart"></i>
						<i className="fa fa-heart"></i>
						<i className="fa fa-heart"></i>(4 lượt mua)
					</pre>
					<p className="font-weight-bold">{price}.000đ</p>
				</div>
				<hr className="hr--dotted" />
			</>
		);
	}
}
