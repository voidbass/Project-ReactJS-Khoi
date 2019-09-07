import React, { Component } from 'react';
import './styles/Blog.scss';

export default class BlogButton extends Component {
	render() {
		return (
			<>
				<div className="col-lg-12 pl-0 pr-0 mb-5 mt-4 Blog__font--min">
					<h6 className="float-left">
						<i className="fa fa-th-large pr-1" />
						<i className="fa fa-list-ul pl-1 pr-1" />
					</h6>
					<h6 className="float-right">
						<i className="fa fa-caret-left" />
						<b className="pl-1 pr-1"> 1</b>
						<p className="pl-1 pr-1 d-inline"> 2 </p>
						<p className="pl-1 pr-1 d-inline"> 3 </p>
						<i className="fa fa-caret-right pl-1 pr-1" />
					</h6>
				</div>
				<hr />
			</>
		);
	}
}
