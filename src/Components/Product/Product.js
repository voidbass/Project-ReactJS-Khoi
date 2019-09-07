import React, { Component } from 'react';
import Banner from './Banner.js';
import MenuList from './MenuList';
import './style/Product.scss';
import { mapStateToProps, mapDispatchToProps } from '../../Store/actions/HomeStore';
import { connect } from "react-redux";


class Product extends Component {
	componentDidMount() {
		this.props.getHomeData();
	}
	render() {
		return (
			<div className="pt-5">
				<div className="pt-5"></div>
				<Banner />
				<MenuList />
			</div>
		);
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);
