import React, { Component } from 'react';
import ItemList from './ItemList';
import { connect } from "react-redux";
import { addItemSelected } from '../../Store/actions/ProductsAction';
import { GET_HOMEDATA } from '../../Store/actions/HomeAction';

class MenuList extends Component {
	constructor(props) {
		super(props);
		this.onShowDetail = this.onShowDetail.bind(this)
		this.onAddCart = this.onAddCart.bind(this)
		this.state = {
			temp: []
		}
	}

	componentDidMount() {
		GET_HOMEDATA()
	}

	onShowDetail(item) {
		return event => {
			let arrItemRecently = JSON.parse(localStorage.getItem('item-detail'));
			if (!arrItemRecently) arrItemRecently = [];

			if (arrItemRecently.length > 3) {
				arrItemRecently.shift();
			}
			arrItemRecently.push(item);

			localStorage.setItem('item-detail', JSON.stringify(arrItemRecently));
			window.location.href = '/productsdetail?=';
		}
	}

	onAddCart(item) {
		return (event) => {
			const { productSelected, add } = this.props;
			let countObject = productSelected;

			if (!countObject) {
				countObject = [];
				countObject.push({ ...item, count: 1 })
			}
			else {
				let idx = countObject.findIndex(obj => obj.id === item.id);
				if (idx > -1)
					countObject[idx].count += 1;
				else
					countObject.push({ ...item, count: 1 })
			}

			localStorage.setItem('id-item--cart', JSON.stringify(countObject));
			add(countObject);
		}
	}

	render() {
		return (
			<div className="container" id="products__menu__list">
				<div className="p-0 row">
					<div className="col-lg-3 pl-0">
						<ul className="p-0 list-unstyled mt-4">
							<h5 className="mt-3 font-15 bold"><i className="fa fa-bars"> </i> DANH MỤC SẢN PHẨM</h5>
							<hr />
							<li>MỸ PHẨM<i className="fa fa-caret-right float-right"></i></li>
							<hr className="hr--dotted" />
							<li>TRANG SỨC<i className="fa fa-caret-down float-right"></i>
								<ul className="products__menu__list__ul">
									<li className="pl-1">Vòng tay</li>
									<li className="pl-1">Nhẫn</li>
									<li className="pl-1">Lắc chân</li>
									<li className="pl-1">Phụ kiện khác</li>
									<li className="pl-1">Giày Lười Giày Mọi</li>
								</ul>
							</li>
							<hr className="hr--dotted" />
							<li>PHỤ KIỆN<i className="fa fa-caret-right float-right"></i></li>
							<hr className="hr--dotted" />
							<li>NƯỚC HOA<i className="fa fa-caret-right float-right"></i></li>
							<hr className="hr--dotted" />
						</ul>
						<h5 className="mt-3 font-15 bold">SO SÁNH SẢN PHẨM</h5>
						<hr />
						<p>Bạn chưa có sản phẩm nào để so sánh</p>
						<h5 className="mt-3 font-15 bold">TAG SẢN PHẨM</h5>
						<hr />
						<button className="btn btnsp left">Hoa tai</button>
						<button className="btn btnsp left">Son</button>
						<button className="btn btnsp left">Nước hoa</button>
						<button className="btn btnsp left">Giày</button>
						<button className="btn btnsp left">Sandal</button>
						<button className="btn btnsp left">Áo sơ mi</button>
						<button className="btn btnsp left">Nước hoa</button>
						<button className="btn btnsp left">Trẻ em</button>
						<button className="btn btnsp left">Thời trang nữ</button>
					</div>
					<div className="col-lg-9 mt-3 pr-0 gird-item__icon">
						<h6 className="float-left">
							<button className="d-inline btn btn-light" id="gird__grid"><i className="fa fa-th-large"></i> </button>
							<button className="d-inline btn btn-light typeButton__deactive" id="gird__list"><i className="fa fa-th-list"></i></button>
						</h6>
						<h6 className="float-right">
							<button className="d-inline btn btn-light" id="gird__btn-left"><i className="fa fa-caret-left"></i></button>
							<button className="d-inline btn btn-light"><b> 1</b></button>
							<button className="d-inline btn btn-light" onClick={() => GET_HOMEDATA(2)}> 2</button>
							<button className="d-inline btn btn-light" onClick={() => GET_HOMEDATA(3)}> 3  </button>
							<button className="d-inline btn btn-light" id="gird__btn-right"><i className="fa fa-caret-right"></i></button>
						</h6>
						<ul className="product--grid--item col-lg-12 row list-unstyled">
							{
								this.props.getHomeData.data
									? this.props.getHomeData.data.map((Item2, index) => <ItemList key={Item2.id}
										id={Item2.id}
										name={Item2.name}
										image={Item2.image}
										description={Item2.description}
										price={Item2.price}
										priceSale={Item2.priceSale}
										productName={Item2.productName}
										onShowDetail={this.onShowDetail(Item2)}
										onAddCart={this.onAddCart(Item2)}
									/>
									)
									: null
							}
						</ul>
					</div>
					<div className="mt-3"></div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		getHomeData: state.homereducer,
		productSelected: state.productsreducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		add: (item) => {
			dispatch(addItemSelected(item));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList); 