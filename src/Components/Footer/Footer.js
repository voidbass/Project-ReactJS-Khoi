import React, { Component } from 'react';
import './style/Footer.scss';

export default class Footer extends Component {
	render() {
		return (
			<footer className="mt-5 container mw-100 pt-4" id="footer">
				<div className="hoc no--hoc">
					<ul className="font-15 row list-unstyled">
						<li className="col-sm-4 col-md-4 col-lg-4 col-xl-4"><h5 className="font-weight-bold">LIÊN HỆ VỚI CHÚNG TÔI</h5>
							<ul className="font-style--none mt-1 color--404040 list-unstyled">
								<li><i className="fa fa-map-marker active"></i> Tầng 4 Tòa nhà HaNoi Group Số 442 Đại Cấn, P.Cống Vi, Q.Ba Đình, Hà Nội</li>
								<li>
									<p className="mb-0"><i className="fa fa-phone active"></i> (04) 6674 2332 - <i className="fa fa-fax active"></i> (04) 3786 8904</p>
								</li>
								<li>
									<p><i className="fa fa-phone active"></i> (08) 6680 9686   <i className="fa fa-envelope active"></i><em><a href="mailto:Support@bizweb.vn"> Support@bizweb.vn</a></em></p>
								</li>
							</ul>
						</li>
						<li className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
							<ul className="row list-unstyled">
								<li className="bold font-15 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0 hr-bot"><h5 className="font-weight-bold">CHUYỂN HÀNG</h5>
									<ul className="font-style--none font-size-footer--min2 topspace-10 list-unstyled">
										<li className="fix-footer"><a href="/">Mua sắm trực tuyến</a></li>
										<li className="fix-footer"><a href="/">Đến từ chúng tôi gửi đến</a></li>
										<li className="fix-footer"><a href="/">Chính sách vận chuyển</a></li>
										<li className="fix-footer"><a href="/">Vận chuyển thông tin</a></li>
									</ul>
								</li>
								<li className="bold col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0 hr-bot"><h5 className="font-weight-bold">HỖ TRỢ</h5>
									<ul className="font-style--none font-size-footer--min2 topspace-10 list-unstyled">
										<li className="fix-footer"><a href="/">Câu chuyện của chúng ta</a></li>
										<li className="fix-footer"><a href="/">Thanh toán an toàn</a></li>
										<li className="fix-footer"><a href="/">Tùy chọn vận chuyển</a></li>
										<li className="fix-footer"><a href="/">Chính sách vận chuyển</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<li className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
							<ul className="row list-unstyled">
								<li className="bold col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0 hr-bot"><h5 className="font-weight-bold">THÔNG TIN</h5>
									<ul className="font-style--none font-size-footer--min2 topspace-10 list-unstyled">
										<li className="fix-footer"><a href="/">Về chúng tôi</a></li>
										<li className="fix-footer"><a href="/">Điều khoản và điều kiện</a></li>
										<li className="fix-footer"><a href="/">Chính sách riêng tư</a></li>
										<li className="fix-footer"><a href="/">Đơn đặt hàng và return</a></li>
									</ul>
								</li>
								<li className="bold col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0"><h5 className="font-weight-bold">MY ACCOUNT</h5>
									<ul className="font-style--none font-size-footer--min2 topspace-10 list-unstyled">
										<div className="fix-footer"><a href="/">Xem giỏ hàng</a></div>
										<div className="fix-footer"><a href="/">Sản phẩm yêu thích</a></div>
										<div className="fix-footer"><a href="/">Kiểm tra</a></div>
										<div className="fix-footer"><a href="/">Theo dõi đơn đặt hàng</a></div>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
					<hr className="hrfooter" />
					<div className="row">
						<div className="inline col-sm-6 col-md-6 col-lg-6 col-xl-6 color--404040" id="copyright">@Copyright 2008-2014 DKT Technology JSC</div>
						<div className="inline col-sm-6 col-md-6 col-lg-6 col-xl-6 text-right"><img src="lib/imgs/visa.png" alt="footer-visa" /></div>
					</div>
				</div>
    		</footer>
		);
	}
}
