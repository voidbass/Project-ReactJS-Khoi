import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import './style/ShoppingCart.scss';
import { Link } from 'react-router-dom';

class Payment extends Component {
	constructor(props){
		super(props);

		this.state = {
			check: true
		};
		this.onHandleFinish = this.onHandleFinish.bind(this);
	}

	onHandleFinish(){
		let temp = JSON.parse(localStorage.getItem('id-item--cart'));
		temp.splice(0,temp.length)
		localStorage.setItem("id-item--cart", JSON.stringify(temp));
		if (temp){
			alert('Bạn đã thanh toán thành công!!')
		}
	}

	render() {

		const { users } = this.props;
		const { check } = this.state;

		let user = JSON.parse(localStorage.getItem("logon"));

		let firstname = "", lastname = "", email = "";

		if (user) {
			for (var u of users) {
				if (u.id === user.id) {
					firstname = u.firstname;
					lastname = u.lastname;
					email = u.email;
				}
			}
		}
		return (
			<div className="hoc pt-5" id="Payment">
				<h1 className="mb-4 mt-5 text-center">Xem lại thông tin</h1>
				<div className='pt-5'>
					<h3 className='text-center'>Thông tin người dùng</h3>
					<div className="form-horizontal">
						<div className="form-group">
							<label className="control-label">First Name:</label>
							<input type="text" 
							className="form-control" disabled={check}
							id="firstname" defaultValue={firstname}/>
						</div>
						<div className="form-group">
							<label className="control-label">Last Name:</label>
							<input type="text" 
							className="form-control" disabled={check}
							id="lastname" defaultValue={lastname}/>
						</div>
						<div className="form-group">
							<label className="control-label">Email:</label>
							<input type="email" 
							className="form-control" disabled={check}
							id="email" defaultValue={email}/>
						</div>
					</div>
					<h3 className='text-center py-5'>Thông tin giỏ hàng</h3>
					<table className="container text-center mb-3 table-bordered" >
						<tbody>
							<tr disabled={check} className="row  p-0 my-0">
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
					<div className="col-lg-12 mt-4 pr-0 text-right">
						<Link to ="/product"><button className="btn btn-dark cart-button__4" onClick={this.onHandleFinish}>THANH TOÁN</button></Link>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.userreducer
	}
}

export default connect(mapStateToProps, null)(Payment);