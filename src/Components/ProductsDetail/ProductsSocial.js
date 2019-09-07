import React, { Component } from 'react';

export default class ProductsSocial extends Component {
	render() {
		return (
			<div className="inline detail-item__btnall">
				<button className="btnface py-0"><i className="fab fa-facebook-square"> Like</i></button><span className="arrow-box">0</span>
				<button className="btntwitter py-0"><i className="fab fa-twitter font-weight-bold">
						<p className="d-inline font-weight-bold py-0 m-0"> Tweet</p></i></button><span className="arrow-box">0</span>
				<button className="btngplus py-0"><i className="fab fa-google-plus font-weight-bold"> +1</i></button><span className="arrow-box">0</span>
				<div>
					<button className="pr-1 pl-1 btnlinkedin color--white border-right"><i className="fab fa-linkedin font-weight-bold"></i></button>
					<button className="m-0 btnlinkedin border-none"><a className="font-weight-bold color--white" href="/"> Share</a></button>
				</div>
				<button className="btnpinterest py-0"><i className="fab fa-pinterest-p font-weight-bold"> in it</i></button>
			</div>
		);
	}
}
