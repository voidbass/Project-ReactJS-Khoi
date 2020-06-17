import React, { Component } from 'react';
import { connect } from "react-redux";
import ItemItemHotContent from './ItemItemHotContent';
import { addItemSelected } from '../../Store/actions/ProductsAction';


class ItemItemHot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		this.onShowDetail = this.onShowDetail.bind(this);
		this.onAddCart = this.onAddCart.bind(this)
	}


	// show recent view
	onShowDetail(item) {
		return (event) => {
			let arrItemRecently = JSON.parse(localStorage.getItem('item-detail'));
			if (!arrItemRecently) arrItemRecently = [];

			if (arrItemRecently.length > 2) {
				arrItemRecently.shift();
			}

			let findItem = arrItemRecently.findIndex(obj => obj.id === item.id);
			if (findItem < 0) {
				arrItemRecently.push(item);
			}
			localStorage.setItem('item-detail', JSON.stringify(arrItemRecently));
			window.location.href = '/productsdetail?=';
		}
	}

	onAddCart(item) {
		return (event) => {
			const { productSelected, add } = this.props;
			let countObject = productSelected;

			if (!countObject) {
				countObject = [];
				countObject.push({ ...item, count: 1 })
			}
			else {
				let idx = countObject.findIndex(obj => obj.id === item.id);
				if (idx > -1)
					countObject[idx].count += 1;
				else
					countObject.push({ ...item, count: 1 })
			}

			localStorage.setItem('id-item--cart', JSON.stringify(countObject));
			add(countObject);
		}
	}


	render() {

		return (
			<ul className="list-unstyled m-4 p-0 row">
				{
					this.props.getHomeData.data
						?
						this.props.getHomeData.data.map((Item2, index) => <ItemItemHotContent key={Item2.id}
							id={Item2.id}
							name={Item2.name}
							image={Item2.image}
							description={Item2.description}
							price={Item2.price}
							productName={Item2.productName}
							priceSale={Item2.priceSale}
							onShowDetail={this.onShowDetail(Item2)}
							onAddCart={this.onAddCart(Item2)}
						/>
						)
						: null
				}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		getHomeData: state.homereducer,
		productSelected: state.productsreducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		add: (item) => {
			dispatch(addItemSelected(item));
		}
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemItemHot); 
