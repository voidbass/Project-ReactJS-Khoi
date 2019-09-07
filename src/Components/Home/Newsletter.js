import React, { Component } from 'react';
import HomeModals from './HomeModals';

export default class Newsletter extends Component {
	constructor(props, context) {
   		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
    	  show: false,
		};
	}

		handleClose() {
		  this.setState({ show: false });
		}

		handleShow() {
		  this.setState({ show: true });
		}

	render() {
		var Newsletter__List = ["Đồng hồ", "Túi", "Phụ kiện", "Đồng hồ", "Túi", "Giày", "Sandal", "Áo sơ mi", "Nước hoa", "Giày", "Sandal", "Trẻ em", "Thời trang nữ", "Trẻ em", "Thời trang nữ"];
		
		let elementsNewsletter = Newsletter__List.map((Item,index) => {
			return	<button key={index} className="btn btnsp text-left p-1 border border-dark">{Item}</button>
		})

		return (
			<li className="col-sm-4 col-md-12 col-lg-4 col-xl-4 row pr-0 pl-0 ml-2">
				<div className="col-md-6 col-lg-12">
					<p className="font-weight-bold text-center">GỬI EMAIL CHO CHÚNG TÔI</p>
					<pre className="text-center" style={{color: 'gray', fontStyle: 'italic'}}><s>{"              "}</s>{'///////////'}<s>{"              "}</s></pre>
					<input className="mt-2 form-control" type="text" placeholder="Email của bạn" /><br />
					<p className="fontstylenone text-center">Gửi email để nhận những ưu đãi mới nhất</p>
					<div className="text-center">
						<HomeModals />
					</div>
				</div>
				<div className="col-md-6 col-lg-12 pb-0">
					<h3 className="font-weight-bold text-center mt-2">TAG SẢN PHẨM</h3>
					<pre className="text-center" style={{color: 'gray', fontStyle: 'italic'}}><s>{"              "}</s>{'///////////'}<s>{"              "}</s></pre>
					{elementsNewsletter}
				</div>
			</li>

		);
	}
}
