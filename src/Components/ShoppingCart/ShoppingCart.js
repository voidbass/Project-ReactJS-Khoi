import React, { Component } from 'react';
import Cart from "./Cart";
import './style/ShoppingCart.scss';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
	constructor(props){
		super(props);
		this.onHandleResetAll = this.onHandleResetAll.bind(this);
		this.onHandlePayment = this.onHandlePayment.bind(this);
	}

	onHandleResetAll(){
		let ItemRemove = [];
		ItemRemove = JSON.parse(localStorage.getItem("id-item--cart"));
		if (ItemRemove === null || ItemRemove === undefined || ItemRemove === '') {
			alert("Xóa không khí à @@");
		} else {
			let c = window.confirm("Bạn muốn xóa hết ư? :( ")
			if (c){
				ItemRemove.splice("id-item--cart");
				window.location.href = "/product";
			} else {
				alert("Thanks god");
				return false;
			}
			localStorage.setItem("id-item--cart", JSON.stringify(ItemRemove));
		}
	}

	onHandlePayment(){
		let tempUser = JSON.parse(localStorage.getItem("logon"));
		let temp = JSON.parse(localStorage.getItem("id-item--cart"));
		let cart = [];
		let loginuser = [];
		if (!temp) temp = []
		if(temp){
			for (let item of Object.keys(temp)){
				if (item){
					cart.push(temp[item])
				}
			}
		}

		if(tempUser){
			loginuser = tempUser
		}

		if (!loginuser.check) {
			alert('Bạn phải đăng nhập trước đã!!');
		} else if (cart.length <= 0){
			alert('Có sản phẩm đâu mà thanh toán má!!');
			this.setState({direct: 'sign-in'})
		} else this.setState({direct: 'payment'});
	}


	render() {
		let tempUser = JSON.parse(localStorage.getItem("logon"));
		let temp = JSON.parse(localStorage.getItem("id-item--cart"));
		if (!tempUser) tempUser = [];
		if (!temp) temp = [];
		return(
			<div>
				<div className="hoc pt-5" id="ShoppingCart">
					<h1 className="mb-4 mt-5">GIỎ HÀNG</h1>
					<table className="container text-center mb-3 table-bordered" >
						<tbody>
							<tr className="row  p-0 my-0">
								<th className="col-lg-2">ẢNH</th>
								<th className="col-lg-3">TÊN SẢN PHẨM</th>
								<th className="col-lg-2">GIÁ</th>
								<th className="col-lg-2">SỐ LƯỢNG</th>
								<th className="col-lg-2">TỔNG SỐ</th>
								<th className="col-lg-1">XÓA</th>
							</tr>
							<Cart />
						</tbody>
					</table>
				</div>
				<div className="container hoc p-0">
					<div className="row">
						<div className="col-lg-12 mt-4 cart-button text-right">
							<Link to ="/product"><button className="btn btn-dark cart-button__buy">TIẾP TỤC MUA HÀNG</button></Link>
							<Link to ={"/shopping-cart"}><button className="btn btn-dark cart-button__2" onClick={this.onHandleResetAll}>XÓA TẤT CẢ</button></Link>
							{
								(!tempUser.check) ?	
								<Link to ={"/sign-in"}><button className="btn btn-dark cart-button__4" onClick={this.onHandlePayment}>THANH TOÁN</button></Link>
								: (temp.length > 0) ? <Link to ={"/payment"}><button className="btn btn-dark cart-button__4" onClick={this.onHandlePayment}>THANH TOÁN</button></Link>
								: <Link to ={"/product"}><button className="btn btn-dark cart-button__4" onClick={this.onHandlePayment}>THANH TOÁN</button></Link>
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
