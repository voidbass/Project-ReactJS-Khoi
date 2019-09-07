import React, { Component } from 'react';
import './style/MenuNavBar.scss';
import { Link } from 'react-router-dom';

export default class MenuLogon extends Component {
	render() {
		return (
			<>
				<div className="cart_item accout--logon">
						<div className='font-weight-bold'><i className="fas fa-eye"/>Xin chào, {this.props.lastname}</div>
						<hr/>
						<Link to="/profile"><i className="fas fa-user"> Tài khoản của tôi</i></Link>
						<Link onClick={this.props.onHandleLogOut} to="/">
							<i className="fas fa-sign-out-alt"> Đăng xuất</i>
						</Link>
				</div>
			</>
		);
	}
}
