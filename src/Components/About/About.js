import React, { Component } from 'react';
import './styles/About.scss';

export default class About extends Component {
	render() {

		return (
			<div className="pt-5">
				<div className="pt-5"></div>
				<div className="hoc pt-2 container">
					<div className="mt-3 row" id="About">
						<h1 className="font-weight-bold mb-2 col-lg-12">VỀ CHÚNG TÔI</h1>
						<div className="col-lg-6 col-12"><img className="About__Img" alt="Banner3" src="/lib/imgs/banner3.png" /></div>
						<div className="col-lg-6 col-12"><img className="About__logo" alt="Logo" src="/lib/imgs/logo.png" />
							<h6 className="About-Title__font--min font-weight-bold mt-3">GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA</h6>
							<p className="About__font--min mt-2">Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
							<p className="About__font--min text-left mt-1"><a href="/blog">Xem thêm</a></p>
						</div>
					</div>
				</div>
			</div>

		);
	}
}
