import React, { Component } from 'react';

class TableProductContent extends Component {
	constructor(props){
		super(props);
		this.state = {
			show: true
		};

		this.createRefComponent();
		this.handleEditProduct = this.handleEditProduct.bind(this);
		this.handleSaveProduct = this.handleSaveProduct.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
	}

	createRefComponent() {
		this.productName = React.createRef();
		this.price = React.createRef();
		this.priceSale = React.createRef();
		this.description = React.createRef();
		this.productNameList = React.createRef();
		this.descriptionList = React.createRef();
		this.type = React.createRef();
		this.sell = React.createRef();
		this.rating = React.createRef();
	}

	async editDataProducts(obj) {
		// Put Data product
		await fetch("http://5d230e064e05c600146efa7e.mockapi.io/mandala/products/"+obj.id, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(obj)
		});
	}

	async deleteDataProducts(object) {
		// Delete Data product
		await fetch("http://5d230e064e05c600146efa7e.mockapi.io/mandala/products/"+object, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		});
	}

	handleDeleteProduct(){
		let object = this.props.id;
		if (object) { 
			this.deleteDataProducts(object) 
		}
	}

	handleEditProduct(){
		this.setState({
			show: false
		})
	}

	handleCancel(){
		this.setState({
			show: true
		})
	}

	handleSaveProduct(){
		this.setState({
			show: true
		})
		const productName = this.productName.current.value;
		const price = this.price.current.value;
		const priceSale = this.priceSale.current.value;
		const description = this.description.current.value;
		const productNameList = this.productNameList.current.value;
		const descriptionList = this.descriptionList.current.value;
		const type = this.type.current.value;
		const sell = this.sell.current.value;
		const rating = this.rating.current.value;
		let obj = {id: this.props.id, productName, price, priceSale, description, productNameList, descriptionList, type, sell, rating};
		if (productName && price && priceSale && description && productNameList && descriptionList && type && sell && rating) {
			this.editDataProducts(obj);
		}
	}

	render() {
		let {
			image,
			productName,
			price,
			priceSale,
			description,
			productNameList,
			descriptionList,
			type,
			sell,
			rating
		} = this.props
		return (
			<tr className="row">
				<td className="col-lg-1">
					<img className="admin__img" src={"/lib/imgs/"+image} alt={image} />
				</td>
				<td className="col-lg-1">
					{ (this.state.show) ?
						<span>{productName}</span>
						:
							<input
								type="text"
								name="productName"
								className="form-control"
								defaultValue={productName}
								ref={this.productName}
							/>
					}
				</td>
				<td className="col-lg-1">
					{ (this.state.show) ?
						<span>{price}</span>
						:
							<input
								type="text"
								name="price"
								className="form-control"
								defaultValue={price}
								ref={this.price}
							/>
					}
				</td>
				<td className="col-lg-1">
					{ (this.state.show) ?
						<span>{priceSale}</span>
						:
							<input
								type="priceSale"
								name="priceSale"
								className="form-control"
								defaultValue={priceSale}
								ref={this.priceSale}
							/>
					}
				</td>
				<td className="col-lg-1">
					{ (this.state.show) ?
						<span>{description}</span>
						:
							<input
								type="text"
								name="description"
								className="form-control"
								defaultValue={description}
								ref={this.description}
							/>
					}
				</td>
				<td className="col-lg-1">
					{ (this.state.show) ?
						<span>{productNameList}</span>
						:
							<input
								type="text"
								name="productNameList"
								className="form-control"
								defaultValue={productNameList}
								ref={this.productNameList}
							/>
					}
				</td>
				<td className="col-lg-2">
					{ (this.state.show) ?
						<span>{descriptionList}</span>
						:
							<input
								type="text"
								name="descriptionList"
								className="form-control"
								defaultValue={descriptionList}
								ref={this.descriptionList}
							/>
					}
				</td>
				<td className="col-lg-1">
					{ (this.state.show) ?
						<span>{type}</span>
						:
							<input
								type="text"
								name="type"
								className="form-control"
								defaultValue={type}
								ref={this.type}
							/>
					}
				</td>
				<td className="col-lg-1">
					{ (this.state.show) ?
						<span>{sell}</span>
						:
							<input
								type="text"
								name="sell"
								className="form-control"
								defaultValue={sell}
								ref={this.sell}
							/>
					}
				</td>
				<td className="col-lg-1">
					{ (this.state.show) ?
						<span>{rating}</span>
						:
							<input
								type="text"
								name="rating"
								className="form-control"
								defaultValue={rating}
								ref={this.rating}
							/>
					}
				</td>
				<td className="col-lg-1">
					{ (this.state.show)
						?
							<>
								<button type="button" className="btn btn-outline-primary" onClick={this.handleEditProduct}>
									<i className="fas fa-pencil-alt"></i>
								</button>
								<button type="button" className="btn btn-outline-danger" onClick={this.handleDeleteProduct}>
									<i className="fas fa-trash"></i>
								</button>
							</>
						:
						(
							<>
								<button type="button" className="btn btn-outline-success" onClick={this.handleSaveProduct}>
									<i className="fas fa-save"></i>
								</button>
								<button type="button" className="btn btn-outline-warning" onClick={this.handleCancel}>
									<i className="fas fa-window-close"></i>
								</button>
							</>
						)
					}
				</td>
			</tr>
		);
	}
}

export default (TableProductContent);