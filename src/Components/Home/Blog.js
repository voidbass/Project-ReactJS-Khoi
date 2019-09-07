import React, { Component } from 'react';

export default class Blog extends Component {
	render() {
		return (
				<li className="col-sm-4 col-md-6 col-lg-4 col-xl-4 text-center mb-5">
		        	<p className="font-weight-bold">BLOG</p>
		        	<pre style={{color: 'gray'}}><s>              </s>{'///////////'}<s>              </s></pre>
		        	<img className='Home__Blog' src="/lib/imgs/2image.png" alt="Home__Blog" />
					<p className="text-left font-weight-bold pt-3">REVIEW SON KEM BOURJOIS VELVET</p>
					<hr/>
					<p className="text-left">Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
					<p className="text-left font-italic pt-2" style={{color: 'gray'}}>Bởi NamTran ( 27 / 05 / 2015 )</p>
					<hr/>
					<div className="row inspace-15 pt-0" style={{color: 'gray'}}>
					  <a href='/' className="col-lg-6 col-6 col-md-6 text-left color--gray">Đọc thêm <i className="fa fa-angle-right" style={{border:"none"}}>  </i></a>
					  <a href='/' className="col-lg-6 col-md-6 col-6 text-right color--gray">23 Bình luận</a>
					</div>
		        </li>
		);
	}
}
