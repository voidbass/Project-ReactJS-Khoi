import React, { Component } from 'react';
import './style/ProductsDetail.scss';
import ProductsImage from './ProductsImage';
import ProductsDescription from './ProductsDescription';
import ProductsDetailTag from './ProductsDetailTag';
import ProductsDetailRecentView from './ProductsDetailRecentView';
import ProductsDetailHotSale from './ProductsDetailHotSale';
import ProductsSocial from './ProductsSocial';
import Button from './Button';
import Banner from './Banner';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from '../../Store/actions/HomeStore';

class ProductsDetail extends Component {
	componentDidMount() {
		this.props.getHomeData();
	}

	render() {
		const temp = JSON.parse(localStorage.getItem('item-detail'));
		if (temp) {
			return (
				<article className="container pt-5" id="productsdetail">
					<div className="row pl-4 pt-5">
						<Banner />
						<ul className="col-3 col-lg-1 list-unstyled align-self-center">
							<li className="text-center pt-5"><img src="/lib/imgs/arrow-up.png" alt="arrows-up" /></li>
							<li><img src="/lib/imgs/hop1.png" alt="hop1" /></li>
							<li><img src="/lib/imgs/hop2.png" alt="hop2" /></li>
							<li><img src="/lib/imgs/hop3.png" alt="hop3" /></li>
							<li><img src="/lib/imgs/hop4.png" alt="hop4" /></li>
							<li className="text-center"><img src="/lib/imgs/arrow-down.png" alt="arrows-down" /></li>
						</ul>
						<ProductsImage />
						<aside className="col-lg-5">
							<ProductsDescription />
							<h5 className="font-weight-bold">Màu sắc</h5>
							<select>
								<option value="Màu bạc">Màu bạc</option>
							</select>
							<h5 className="font-weight-bold">Size</h5>
							<select>
								<option value="12">12</option>
							</select>
							<h5 className="font-weight-bold">Số lượng</h5>
							<div className="block">
								<Button />
							</div>
							<p className="inline">Shipping & <Link to="/" >Returns</Link></p>
							<ProductsSocial />
						</aside>
					</div>
					<div className="row mt-4">
						<ProductsDetailTag />
						<div className="col-lg-4">
							<ProductsDetailHotSale />
							<ProductsDetailRecentView />
						</div>
					</div>
				</article>
			);
		} else {
			window.location.href = "/";
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetail)