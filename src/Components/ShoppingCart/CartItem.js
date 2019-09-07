import React, { Component } from 'react';

export default class CartItem extends Component {
	render() {
		const {
			id,
			image,
			name,
			price,
			count,
			onShowDetail,
			onRemoveItem } = this.props;
		return (
			<>
				<tr key={id} className="row p-0 my-0">
					<td className="col-lg-2"><img className="img-fluid cartItem__Image" onClick={onShowDetail} src={"/lib/imgs/"+image} alt={image} /></td>
					<td className="align-middle cartItem__Table--space col-lg-3"><p>{name}</p></td>
					<td className="cartItem__Table--space col-lg-2 bold">{price}.000<sup>đ</sup></td>
					<td className="cartItem__Table--space col-lg-2"><input readOnly className="input--value" data--id="2" type="number" min="1" max="9" value={count} /></td>
					<td className="cartItem__Table--space col-lg-2 bold">{price*count}.000<sup>đ</sup></td>
					<td className="cartItem__Table--space col-lg-1"><button onClick={onRemoveItem} data--id="2" className="btn item_icon--remove"><i className="fas fa-trash"></i></button></td>
				</tr>
			</>
		)
	}
}
