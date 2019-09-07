import React, { Component } from 'react';
import AddProduct from "./component/Products-sub-component/AddProduct";
import TableProduct from "./component/Products-sub-component/TableProduct";
import LayoutAdmin from "./component/LayoutAdmin";
import './style/Admin.scss';


class Products extends Component {
	constructor(props){
		super(props);
		this.state = {
			redirect: true
		}

		this.onClickAdd = this.onClickAdd.bind(this);
	}

	onClickAdd(){
		this.setState({
			redirect: !this.state.redirect
		})
	}

	render() {
		let tempProducts = JSON.parse(localStorage.getItem('admin'));
		if (tempProducts !== null && tempProducts !== undefined && tempProducts !== []) {
			return (
				<LayoutAdmin>
					{
						(this.state.redirect) ?
							<div className='pt-5'>
								<button className="mt-5 btn btn-primary text-uppercase" onClick={this.onClickAdd}>ADD PRODUCT</button>
								<TableProduct />
							</div>
							:
							<AddProduct onClickAdd={this.onClickAdd} />
					}
				</LayoutAdmin>
			);
		} else {
			window.location.href = "/admin";
		}
	}
}

export default (Products);