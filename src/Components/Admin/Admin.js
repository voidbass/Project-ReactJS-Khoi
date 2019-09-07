import React, { Component } from 'react';
import { connect } from "react-redux";

class Admin extends Component {
	constructor(props) {
		super(props);

		this.email = React.createRef();
		this.password = React.createRef();

		this.handleLoginAdmin = this.handleLoginAdmin.bind(this);
	}

	handleLoginAdmin(event) {
		const email = this.email.current.value;
		const password = this.password.current.value;

		this.loginHandler(email, password);
	}

	loginHandler(email, pass) {
		const { users } = this.props;
		let tempUsers = [];
		for(var user of users) {
			if (user.role === 1)
				tempUsers.push(user);
		}

		let idxEmail = tempUsers.findIndex((us) => us.email === email); // Find email
		let idxPass = tempUsers.findIndex(us => us.password === pass); // Find password

		if (idxEmail <= -1) alert("Phải Admin ko đó cha?");
		else {
			if (idxPass <= -1) alert("Sai mật khẩu rồi kìa cha!!!");
			else {
				const user = tempUsers.find((us) => us.email === email);
				alert("Đăng nhập thành công !!!");
				localStorage.setItem("admin", JSON.stringify({id: user.id, check: true}));
				window.location.href = "/dashboard";
			}
		}
	}

	render() {
		let tempUsers = JSON.parse(localStorage.getItem('admin'));
		if (tempUsers === null || tempUsers === undefined || tempUsers === []) {
			return (
				<div className="container text-center pt-5" id="Admin">
					<div className="mw-50 mt-5 border">
						<div className="pt-5 ">
							<h1>Admin</h1>
						</div>
						<div className="pt-3">
							<div className="form-group" data-validate="Email is required">
								<label className="control-label">Email: &nbsp;</label>
								<input type="text" name="email" ref={this.email}
								placeholder="Enter email" required/>
							</div>
							<div className="form-group" data-validate="Password is required">
								<label className="control-label">Password: &nbsp;</label>
								<input type="password" name="pass" ref={this.password}
								placeholder="Enter password" required/>
							</div>
							<button className="btn btn-dark" onClick={this.handleLoginAdmin}>
								Login
							</button>
						</div>
					</div>
				</div>
			);
		} else {
			window.location.href = "/dashboard";
		}
	}
}

function mapStateToProps(state) {
	return {
		users: state.userreducer
	}
}

export default connect(mapStateToProps, null)(Admin);