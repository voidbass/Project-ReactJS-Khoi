import React, { Component } from 'react';
import './App.css';
import MenuNavBar from './Components/MenuNavBar/MenuNavBar';
import Footer from './Components/Footer/Footer';
import { mapStateToProps, mapDispatchToProps } from './Store/actions/HomeStore';
import { connect } from "react-redux";

class App extends Component {
	componentDidMount() {
		this.props.getHomeData();
		this.props.getUserData();
	}
	render() {
		return (
			<div>
				<MenuNavBar />
				<Footer />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)