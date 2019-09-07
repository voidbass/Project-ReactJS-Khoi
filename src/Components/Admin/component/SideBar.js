import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class SideBar extends Component{
	render() {
		return (
			<ul className="sidebar navbar-nav bg-dark">
				<li className="nav-item">
					<Link className="nav-link text-center topspace-50" to="/dashboard">
						<i className="fas fa-fw fa-tachometer-alt" />
						<span> Dashboard</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link text-center" to="/users">
						<i className="fas fa-users"/>
						<span> Users</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link text-center" to="/products">
						<i className="fab fa-elementor"/>
						<span> Products</span>
					</Link>
				</li>
			</ul>
		);
	}
}

				
export default connect(null, null)(SideBar);