import React, { Component } from 'react';
import { connect } from "react-redux";
import { GET_USERDATA } from '../../../../Store/actions/UserAction';

class AddUser extends Component {
	constructor(props) {
		super(props);

		this.createRefComponent();
		this.onAddHandler = this.onAddHandler.bind(this);
		this.state = {
			role: 2,
			redirect: false
		}
	}

	componentDidUpdate(){
		this.props.usersUpdate();
	}

	createRefComponent() {
		this.firstname = React.createRef();
		this.lastname = React.createRef();
		this.email = React.createRef();
		this.password = React.createRef();
	}

	async addUser(user) {
		await fetch('https://5d230e064e05c600146efa7e.mockapi.io/mandala/users/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
		});
	}

	onAddHandler(event) {
		const firstname = this.firstname.current.value;
		const lastname = this.lastname.current.value;
		const email = this.email.current.value;
		const password = this.password.current.value;
		const { role } = this.state;
		const { users } = this.props;

		let id = 1;
		if (users) {
			id = users[users.length-1].id+1; // Get next ID in DB
		}

		if (firstname && lastname && email && password && role) {
			let user = {id, firstname, lastname, email, password, role};
			this.addUser(user);

			this.firstname.current.value = "";
			this.lastname.current.value = "";
			this.email.current.value = "";
			this.password.current.value = "";
			this.props.onClickAdd()
		} else alert('Chưa điền hết mà?')
		
	}

	render() {
		return (
			<div className="mt-5 pt-5">
				<div className="form-group">
					<label>First Name:</label>
					<input type="text" ref={this.firstname} className="form-control"
							id="fname" placeholder="Enter First Name" required/>
				</div>
				<div className="form-group">
					<label>Last Name:</label>
					<input type="text" ref={this.lastname} className="form-control"
							id="lname" placeholder="Enter Last Name" required/>
				</div>
				<div className="form-group">
					<label>Email:</label>
					<input type="email" ref={this.email} className="form-control"
							id="email" placeholder="Enter email" required/>
				</div>
				<div className="form-group">
					<label>Password:</label>
					<input type="password" ref={this.password} className="form-control"
							id="password" placeholder="Enter password" required/>
				</div>
				<div className="form-group">
					<button onClick={this.onAddHandler} className="btn btn-primary">Add User</button>
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
		users: state.userreducer
	}
}

function mapDispatchToProps(dispatch){
	return {
		usersUpdate: (item) => {
			dispatch(GET_USERDATA(item));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);