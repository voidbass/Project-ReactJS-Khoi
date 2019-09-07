import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style/Profile.scss';


class Profile extends Component {
	constructor(props){
		super(props);

		this.state = {
			check: true
		};

		this.firstname = React.createRef();
		this.lastname = React.createRef();
		this.email = React.createRef();
		this.password = React.createRef();

		this.onUpdateHandler = this.onUpdateHandler.bind(this);
	}

	onUpdateHandler(event) {
		this.setState({
			check: !this.state.check
		});

		if(!this.state.check) {
			const { users } = this.props;
			const idUserAccount = JSON.parse(localStorage.getItem("logon"));

			const firstname = this.firstname.current.value;
			const lastname = this.lastname.current.value;
			const email = this.email.current.value;
			const password = this.password.current.value;

			if(idUserAccount) {
				let temp = users.find(us => us.id === idUserAccount.id);
				let obj = {...temp, firstname, lastname, email, password};
				this.editProfile(obj);
			}
		}
	}

	async editProfile(obj) {
		await fetch("https://5d230e064e05c600146efa7e.mockapi.io/mandala/users/"+obj.id, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(obj)
		});
	}

	render() {
		const { users } = this.props;
		const { check } = this.state;

		let user = JSON.parse(localStorage.getItem("logon"));

		let firstname = "", lastname = "", email = "", password = "";

		if (user) {
			for (var u of users) {
				if (u.id === user.id) {
					firstname = u.firstname;
					lastname = u.lastname;
					email = u.email;
					password = u.password;
				}
			}
		}
		return (
			<div className='container pt-5'>
				<div className='pt-5'>
					<h2 className='text-center'>Thông tin người dùng</h2>
					<div className="form-horizontal">
						<div className="form-group">
							<label className="control-label">First Name:</label>
							<input type="text" disabled={check} 
							className="form-control" ref={this.firstname}
							id="firstname" defaultValue={firstname}/>
						</div>
						<div className="form-group">
							<label className="control-label">Last Name:</label>
							<input type="text" disabled={check} 
							className="form-control" ref={this.lastname}
							id="lastname" defaultValue={lastname}/>
						</div>
						<div className="form-group">
							<label className="control-label">Email:</label>
							<input type="email" disabled={check} 
							className="form-control" ref={this.email}
							id="email" defaultValue={email}/>
						</div>
						<div className="form-group">
							<label className="control-label">Password:</label>
							<input type="password" disabled={check} 
							className="form-control" ref={this.password}
							id="password" defaultValue={password}/>
						</div>
						{
							check && 
							<button className="btn btn-success" disabled={!check} 
								onClick={this.onUpdateHandler}>Chỉnh sửa</button>
						}
						{
							!check &&
							<button className="btn btn-success" disabled={check} 
								onClick={this.onUpdateHandler}>Cập nhật</button>
						}
					</div>
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

export default connect(mapStateToProps, null)(Profile);