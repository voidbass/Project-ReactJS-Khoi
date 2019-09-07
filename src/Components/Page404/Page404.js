import React, { Component } from 'react';
import './style/Page404.scss';
import { Link } from 'react-router-dom';

export default class Page404 extends Component {
	render() {
		return (
			<div className="text-center"><img src="/lib/imgs/page_404.jpg" alt="page_404.png" style={{maxWidth: '50%'}}/>
				<div className="input-group mb-3 mt-4">
					<input type="text" style={{ marginLeft: '36%', width: '25%' }} />
					<div className="input-group-append"><span className="input-group-text"><i className="fa fa-search" /></span></div>
				</div>
				<div>
					<Link className="d-inline text-uppercase mr-3" to="/contact">Liên hệ</Link>
					<p className="d-inline">|</p><Link className="text-uppercase ml-3" to="/home">Trang chủ</Link>
				</div>
			</div>

		)
	}
}
