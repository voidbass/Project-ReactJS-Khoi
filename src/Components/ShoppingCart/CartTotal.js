import React, { Component } from 'react';

export default class CartTotal extends Component {
	render() {
		return (
			<tr className="row p-0">
				<td className="col-lg-9 bold pt-2 uppercase">Tổng tiền</td>
				<td className="col-lg-3 bold pt-2">${this.props.total}.000<sup>đ</sup></td>
			</tr>
		);
	}
}
