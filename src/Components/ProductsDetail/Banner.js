import React, { Component } from 'react';

export default class Banner extends Component {
	render() {
		return (
			<>
				<div className="container mw-100 p-0 d-none d-md-block my-4" id="Product__Banner">
					<div className="p-0 container">
						<div className="row p-0">
							<div className="col-lg-4 col-md-4 pt-4"><img className="gird-banner-ct1" src="/lib/imgs/text-banner.png" alt="text-banner.png" /></div>
							<div className="col-lg-3 p-0 mt-3 pl-5 col-md-4">
								<p className="gird-banner-ct2 m-0">Trong vòng 3 ngày</p>
								<p className="bold gird-banner-ct2 m-0 pt-0">(25/5 - 28-5/2015)</p>
							</div>
							<div className="col-lg-4 offset-lg-1 p-0 col-md-4"><img className="bannergirl" src="/lib/imgs/5image.png" alt="5image.png"  /></div>
						</div>
					</div>
	 			</div>
 			</>
		);
	}
}
