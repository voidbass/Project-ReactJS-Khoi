import React, { Component } from 'react';
import Button from './Button';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


class ItemItemNew extends Component {
	render() {
		let Item__list__item = this.props.getHomeData;
		let Item__new = Item__list__item.filter(item => item.type.includes("new"))
		let elementsItem__List__Item = Item__new.map((Item2, index) => {
			return <li key={Item2.id} className={"mt-4 mr-0 ml-0 p-0 d-none d-lg-block text-center triggeritem col-12 col-md-6 col-lg-2 "}>
				<Link href="/productsdetail">
					<img alt={Item2.image} className="item__height" src={"/lib/imgs/" + Item2.image} />
				</Link>
				<hr className="hr__dotted" />
				<p className="nospace" style={{ color: "#c1c1c1" }}>{Item2.name}</p>
				<p className="m-0 p-0"> {Item2.description} </p>
				<hr className="hr__solid" />
				<p className="m-0 p-0 font-weight-bold"> {Item2.productName} </p>
				<p className="m-0 p-0 d-inline">{Item2.price}.000<sup>đ</sup></p>
				<p className="m-0 p-0 d-inline">{Item2.priceSale}.000<sup>đ</sup></p>
				<div className="d-block">
					<Button />
				</div>
			</li>
		})


		return (
			<ul className="list-unstyled m-4 p-0 row">
				{elementsItem__List__Item}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		getHomeData: state.homereducer
	}

}

export default connect(mapStateToProps, null)(ItemItemNew); 
