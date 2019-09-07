import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableProductContent from './TableProductContent';
import { GET_HOMEDATA } from '../../../../Store/actions/HomeAction';

class TableProduct extends Component {
	constructor(props){
		super(props);
		this.state = {
			show: true
		};
	}
	
	componentDidUpdate(){
		this.props.productsUpdate();
	}

	render() {
		let List__product = this.props.products;
		let tempproducts = []
		if (List__product.length > 0) {
			for (var item of List__product) {
				if (item){
					tempproducts.push(item);
				}
			}
		}		
		return (
			<table className='row table table-hover table-bordered'>
				<tbody className="col-lg-12">
					<tr className="row mt-5">
						<th className="col-lg-1">IMAGE</th>
						<th className="col-lg-1">PRODUCT NAME</th>
						<th className="col-lg-1">PRICE</th>
						<th className="col-lg-1">PRICE SALE</th>
						<th className="col-lg-1">DESCRIPTION</th>
						<th className="col-lg-1">PRODUCT LIST</th>
						<th className="col-lg-2">DESCRIPTION LIST</th>
						<th className="col-lg-1">TYPE</th>
						<th className="col-lg-1">SELL</th>
						<th className="col-lg-1">RATING</th>
						<th className="col-lg-1">EDIT</th>
					</tr>
					{
						tempproducts.map((product,idx) => <TableProductContent 	key = {product.id}
																				id = {product.id}
																				productName={product.productName}
																				price={product.price}
																				priceSale={product.priceSale}
																				image={product.image}
																				description={product.description}
																				productNameList={product.productNameList}
																				descriptionList={product.descriptionList}
																				type={product.type}
																				sell={product.sell}
																				rating={product.rating}

												/>
						)
					}
				</tbody>
			</table>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableProduct);