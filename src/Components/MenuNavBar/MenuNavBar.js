import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { addItemSelected } from '../../Store/actions/ProductsAction';
import './style/MenuNavBar.scss';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import Product from '../Product/Product';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Page404 from '../Page404/Page404';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import ProductsDetail from '../ProductsDetail/ProductsDetail';
import Payment from '../ShoppingCart/Payment';
import Profile from '../Profile/Profile';
import Admin from '../Admin/Admin';
import Dashboard from '../Admin/Dashboard';
import Products from '../Admin/Products';
import Users from '../Admin/Users';

import MenuItem	from './MenuItem';
import MenuLogin from './MenuLogin';
import MenuLogon from './MenuLogon';

class MenuNavBar extends Component {
	constructor(props){
		super(props);
		this.state = {'active': 'd-none',
						'active1': 'd-none'
					};

		this.onShowTableCart = this.onShowTableCart.bind(this);
		this.onShowLogin = this.onShowLogin.bind(this);
		this.onRemoveCart = this.onRemoveCart.bind(this);
		this.wrapperRef = React.createRef();
		this.wrapperRef2 = React.createRef();
	}

	componentDidMount() {
		document.addEventListener('click', this.onShowTableCart);
		document.addEventListener('click', this.onShowLogin);
	}

	componentWillUnmount() {
		// important
		document.removeEventListener('click', this.onShowTableCart);
		document.removeEventListener('click', this.onShowLogin);
	}

	onRemoveCart(item) {
		return (event) => {
			let arrItemRemove = JSON.parse(localStorage.getItem('id-item--cart'));
			const { remove } = this.props;

			let idx = arrItemRemove.findIndex(obj => obj.id === item.id);
			arrItemRemove.splice(idx, 1);

			localStorage.setItem("id-item--cart", JSON.stringify(arrItemRemove));
			remove(arrItemRemove);
		}
	}

	onShowTableCart(event){
		const { target } = event;
		if (!this.wrapperRef.current.contains(target)) {
			this.setState({ active: 'd-none'})
		} else this.setState({ active: 'd-block'})
	}
	onShowLogin(event2){
		const { target } = event2;
		(this.wrapperRef2.current.contains(target)) ? this.setState({ active1: 'd-block'}) : this.setState({ active1: 'd-none'});
	}

	onHandleLogOut(){
		let tempUser = [];
		tempUser = JSON.parse(localStorage.getItem("logon"));
		if (tempUser === null || tempUser === undefined || tempUser === '') {
			alert("Có đăng nhập đầu mà bấm đăng xuất? @@");
		} else {
			let c = window.confirm("Bạn muốn đăng xuất ư? :( ")
			if (c){
				tempUser = [];
			} else {
				alert("Ngon");
				return false;
			}
			localStorage.setItem("logon", JSON.stringify(tempUser));
		}
	}

	render() {
		let temp = JSON.parse(localStorage.getItem('id-item--cart'));
		let tempUser = JSON.parse(localStorage.getItem('logon'));
		let sum = 0;
		let total = 0;
		let loginuser = [];
		if (temp !== null && temp !== undefined && temp !== '')
			{
				for ( var item__cart of temp ) {
					total += (item__cart.count * item__cart.price);
					sum += item__cart.count;
				}
			}
		else temp = []
		if(tempUser){
			loginuser = tempUser
		}
		
		return (
			<BrowserRouter>
				<div className="container">
					<div className="container row" id="MenuNavBar">
						<div className="text-left col-2 mt-2"><Link to='/'><img className="logo" src="/lib/imgs/logo.png" alt="logo" /></Link>
						</div>
						<nav className="text-uppercase d-inline mt-4 ml-3 col-7">
							<ul className="text-center">
								<li className="d-inline m-1"><Link to='/'>Trang chủ</Link></li>
								<li className="d-inline m-1"><Link to='/about'>Giới thiệu</Link></li>
								<li className="d-inline m-1"><Link to='/product'>Sản phẩm <i className="fa fa-angle-down"></i></Link>
								</li>
								<li className="d-inline m-1"><Link to='/blog'>Tin tức</Link></li>
								<li className="d-inline m-1"><Link to='/contact'>Liên hệ</Link></li>
							</ul>
						</nav>
						<nav className="text-right mt-4 col-2 mx-0 px-0">
							<ul className="d-inline">
								<li onClick={this.onShowTableCart} ref={this.wrapperRef} className="dropdown d-inline list-unstyled m-1">
									<i className="dropdown-cart fa fa-shopping-cart"></i>
									<span className="badge badge-pill badge-success">{sum}</span>
									<div className={"dropdown-cart-table p-2 "+this.state.active}>
										{
											temp.map((item, idx) => <MenuItem 	key={idx}
																				count={item.count}
																				id={item.id}
																				image={item.image}
																				price={item.price}
																				productName={item.productName}
																				onRemoveCart={this.onRemoveCart(item)}
											/>)
										}
										<hr />
										<div className="total--price">
											<h5 className="float-left font-weight-bold">Tổng số:</h5>
											<span className="float-right font-weight-bold">{total}.000<sup>đ</sup></span>
										</div>
										<Link to="/shopping-cart"><button className="text-uppercase btn btn-dark">Giỏ hàng</button></Link>
									</div>
									
								</li>

								<li className="d-inline m-1"><Link to='/'><i className="fa fa-search"></i></Link></li>
								{
									(!loginuser.check)
										?
											<li onClick={this.onShowLogin} ref={this.wrapperRef2} className="dropdown d-inline m-1">
												<i className="fa fa-bars dropdown-cart"></i>
												<div className={"dropdown-cart-table2 p-2 "+this.state.active1}>
													<MenuLogin />
												</div>
											</li>
										:
											<li onClick={this.onShowLogin} ref={this.wrapperRef2} className="dropdown d-inline m-1">
												<i className="fas fa-user dropdown-cart"/>
												<div className={"dropdown-cart-table2 p-2 "+this.state.active1}>
													<MenuLogon 	onHandleLogOut={this.onHandleLogOut}
																lastname={loginuser.name}
													/>
												</div>
											</li>
										
								}
							</ul>
						</nav>
					</div>
				</div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/product" component={Product} />
					<Route path="/blog" component={Blog} />
					<Route path="/contact" component={Contact} />
					<Route path="/sign-in" component={Signin} />
					<Route path="/sign-up" component={Signup} />
					<Route path="/shopping-cart" component={ShoppingCart} />
					<Route path="/productsdetail" component={ProductsDetail} />
					<Route path="/profile" component={Profile} />
					<Route path="/payment" component={Payment} />
					<Route path="/admin" component={Admin} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/products" component={Products} />
					<Route path="/users" component={Users} />


					<Route component={Page404} />
				</Switch>
			</BrowserRouter>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		remove: (item) => {
			dispatch(addItemSelected(item));
		}
	};
}

export default connect(null, mapDispatchToProps)(MenuNavBar);