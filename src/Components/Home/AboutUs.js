import React, { Component } from 'react';

export default class AboutUs extends Component {
	render() {
		return (
			<li className="col-sm-4 col-md-6 col-lg-4 col-xl-4">
				<p className="font-weight-bold text-center">VỀ CHÚNG TÔI</p>
				<pre className="text-center" style={{color: 'gray', fontStyle: 'italic'}}><s>{"              "}</s>{'///////////'}<s>{"              "}</s></pre><img className="Home__logo" src="/lib/imgs/logo.png" alt="Home__logo" />
				<p className="mt-2 text-left font-weight-bold text-uppercase">Giới thiệu chung về mỹ phẩm Handmade Mandala</p>
				<br/>
				<p className="text-left">Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
				<br/>
				<a href='/' className="text-left">Xem thêm</a>
			</li>
		);
	}
}
