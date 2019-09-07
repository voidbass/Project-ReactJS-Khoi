import React, { Component } from 'react';
import { connect } from "react-redux";
import { GET_HOMEDATA } from '../../../../Store/actions/HomeAction';

class AddProduct extends Component {
	constructor(props) {
		super(props);

		this.createRefComponent();
		this.onAddHandler = this.onAddHandler.bind(this);
		this.handleChangeImage = this.handleChangeImage.bind(this);
		this.state = {
			role: 2,
			redirect: false,
			file: '',
			imagePreviewUrl: '',
			isChecked: true
		}
	}

	onClickAddImage(){
		this.setState({
			file: !this.state.redirect
		})
	}

	componentDidUpdate(){
		this.props.productsUpdate();
	}

	handleChangeImage(e) {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		}
		reader.readAsDataURL(file)
	}

	createRefComponent() {
		this.productName = React.createRef();
		this.price = React.createRef();
		this.priceSale = React.createRef();
		this.image = React.createRef();
		this.description = React.createRef();
		this.productNameList = React.createRef();
		this.descriptionList = React.createRef();
		this.type = React.createRef();
		this.sell = React.createRef();
		this.rating = React.createRef();
	}

	async AddProduct(product) {
		await fetch('https://5d230e064e05c600146efa7e.mockapi.io/mandala/products/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product)
		});
	}

	onAddHandler(event) {
		const productName = this.productName.current.value;
		const price = this.price.current.value;
		const priceSale = this.priceSale.current.value;
		const image = this.state.file.name;
		const description = this.description.current.value;
		const productNameList = this.productNameList.current.value;
		const descriptionList = this.descriptionList.current.value;
		const type = this.type.current.value;
		const sell = this.sell.current.value;
		const rating = this.rating.current.value;

		const { role } = this.state;
		const { products } = this.props;

		let id = 1;
		if (products) {
			id = products[products.length-1].id+1; // Get next ID in DB
		}
		if (productName) {
			let product = {id, productName, price, priceSale, image, description, productNameList, descriptionList, type, sell, rating, role};
			this.AddProduct(product);

			this.productName.current.value = "";
			this.price.current.value = "";
			this.priceSale.current.value = "";
			this.image.current.value = "";;
			this.description.current.value  = "";
			this.productNameList.current.value  = "";
			this.descriptionList.current.value  = "";
			this.sell.current.value  = "";
			this.rating.current.value  = "";
			this.props.onClickAdd()
		} else alert('Chưa điền hết mà?')
	}
	// && price && priceSale && image && description && productNameList && descriptionList && type && sell && rating && role

	render() {
		return (
			<div className="mt-5 pt-5">
				<div className="form-group">
					<label>Product Name:</label>
					<input type="text" ref={this.productName} className="form-control"
							 placeholder="Enter Product Name" required/>
				</div>
				<div className="form-group">
					<label>Price:</label>
					<input type="number" min={0} ref={this.price} className="form-control"
							 placeholder="Enter Price" required/>
				</div>
				<div className="form-group">
					<label>Price Sale:</label>
					<input type="number" min={0} ref={this.priceSale} className="form-control"
							placeholder="Enter Price Sale" required/>
				</div>
				<div className="form-group">
					<label>Image:</label>
					<input type="file" onChange={this.handleChangeImage} ref={this.image} className="form-control-file"
							accept="image/*" placeholder="Enter Image" required/>
					<img className="admin__image" src={this.state.imagePreviewUrl} alt={this.state.file} />
				</div>
				<div className="form-group">
					<label>Description:</label>
					<input type="text" ref={this.description} className="form-control"
							 placeholder="Enter Description" required/>
				</div>
				<div className="form-group">
					<label>Product List:</label>
					<input type="text" ref={this.productNameList} className="form-control"
							 placeholder="Enter Product List" required/>
				</div>
				<div className="form-group">
					<label>Description List:</label>
					<input type="text" ref={this.descriptionList} className="form-control"
							 placeholder="Enter Description List" required/>
				</div>
				<div className="form-group">
					<label>Type: &nbsp;</label>
					<input className="form-control" type="text" ref={this.type} placeholder="Enter Type" required />
				</div>
				<div className="form-group">
					<label>Sell:</label>
					<input type="number" min={0} ref={this.sell} className="form-control"
							 placeholder="Enter Sell" required/>
				</div>
				<div className="form-group">
					<label>Rating:</label>
					<select className="custom-select" ref={this.rating} >
						<option defaultValue>Choose...</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
						<option value="4">Four</option>
						<option value="5">Five</option>
					</select>
				</div>
				<div className="form-group">
					<button onClick={this.onAddHandler} className="btn btn-primary">Add Product</button>
				</div>
				<div className="form-group">
					<button onClick={this.props.onClickAdd} className="btn btn-warning">Cancel</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.homereducer
	}
}

function mapDispatchToProps(dispatch){
	return {
		productsUpdate: (item) => {
			dispatch(GET_HOMEDATA(item));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);