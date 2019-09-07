import React, { Component } from 'react';
import { connect } from "react-redux";
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import { addItemSelected } from '../../Store/actions/ProductsAction';

class Cart extends Component {
	constructor(props){
		super(props);
		this.onRemoveItem = this.onRemoveItem.bind(this);
		this.onShowDetail = this.onShowDetail.bind(this);
		// this.handleUpdateCount = this.handleUpdateCount.bind(this)
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

	onRemoveItem(item) {
		return (event) => {
			let arrItemRemove = JSON.parse(localStorage.getItem('id-item--cart'));
			const { remove } = this.props;

			let idx = arrItemRemove.findIndex(obj => obj.id === item.id);
			arrItemRemove.splice(idx, 1);

			localStorage.setItem("id-item--cart", JSON.stringify(arrItemRemove));
			remove(arrItemRemove);
		}
	}
	
	render() {
		let temp = JSON.parse(localStorage.getItem('id-item--cart'));
		let total = 0;
		if (temp !== null && temp !== undefined && temp !== '')
			{
				for ( var item__cart of temp ) {
					total += (item__cart.count * item__cart.price);
				}
			}
		else temp = []

		return (
			<>
				{
					temp.map((item, idx) => <CartItem	key={idx}
														id={item.id}
														image={item.image}
														count={item.count}
														name={item.productName}
														price={item.price}
														onRemoveItem={this.onRemoveItem(item)}
														onShowDetail={this.onShowDetail(item)}
														
														/>
							)
				}
				<CartTotal total={total} />
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		productSelected: state.productsreducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		remove: (item) => {
			dispatch(addItemSelected(item));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);