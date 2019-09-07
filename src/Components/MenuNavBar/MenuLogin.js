import React, { Component } from 'react';
import './style/MenuNavBar.scss';
import { Link } from 'react-router-dom';

export default class MenuLogin extends Component {
	render() {
		return (
			<>
				<Link to="/sign-in"><button type="button" className="btn btn-primary ml-0">Đăng nhập</button></Link>
				<Link to="/sign-up"><button type="button" className="btn btn-danger">Đăng ký</button></Link>
			</>
		);
	}
}
