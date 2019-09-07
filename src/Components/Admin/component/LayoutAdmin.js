import React, { Component } from 'react';
import SideBar from "./SideBar";
import '../style/Admin.scss';

class LayoutAdmin extends Component {
	render() {
		const checkLoginAdmin = JSON.parse(localStorage.getItem("admin"));
		let check = !checkLoginAdmin ? false : true;
		if(check) {
			return (
				<div className="admin--page">
					<div className="wrap--admin">
						<SideBar/>
						<div className="wrap--content">
							<div className="container-fluid mt-4">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			window.location.href = "/admin";
		}
	}
}

export default LayoutAdmin;