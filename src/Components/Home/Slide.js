import React, { Component } from 'react';

export default class Slide extends Component {
	render() {
		return (
			<div className="mt-3 pb-6 hoc slide">
		        <div className="row pb-5 mb-2">
		        	<img alt="home__slide--1" className="home__slide--1 rounded-circle col-sm-2 col-md-2 col-lg-2" src="/lib/imgs/7image.png" />
		            <div className="col-md-9 col-lg-7 home__slide--2">
		            	<p>"Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kì lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hãng Rohto"</p>
		            	<br />
		            	<p className="info10-4">TUTILE</p>
		            	<em className="home__slide__ct1 mb-4"> _ Giám đốc phát triển sản phẩm         </em>
		            </div>
		            <div className="home__slide__ct2">
			            <i className="fa fa-square active">&nbsp;</i>
			            <i className="fa fa-square text-secondary">&nbsp;</i>
			            <i className="fa fa-square" />
					</div>
					<img alt="flower.png" className="fl_right home__slide--3 col-sm-4 col-md-4 col-lg-4" src="/lib/imgs/home11.png" />
		        </div>
			</div>
		);
	}
}
