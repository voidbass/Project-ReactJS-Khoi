import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		return (
			<div>
				<button className="btn-item1">MUA HÀNG</button>
	            <button className="btn-item2"><i className='fas fa-heart'></i></button>
	            <button className="btn-item3"><i className='fas fa-sync-alt'></i></button>
			</div>
		);
	}
}
