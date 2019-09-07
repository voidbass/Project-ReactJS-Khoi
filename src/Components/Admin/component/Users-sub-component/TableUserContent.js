import React, { Component } from 'react';

class TableUserContent extends Component {
	constructor(props){
		super(props);
		this.state = {
			show: true
		};

		this.createRefComponent();
		this.handleEditUser = this.handleEditUser.bind(this);
		this.handleSaveUser = this.handleSaveUser.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleDeleteUser = this.handleDeleteUser.bind(this);
	}

	createRefComponent() {
		this.firstname = React.createRef();
		this.lastname = React.createRef();
		this.email = React.createRef();
		this.password = React.createRef();
	}

	async editDataUsers(obj) {
		// Put Data User
		await fetch("http://5d230e064e05c600146efa7e.mockapi.io/mandala/users/"+obj.id, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(obj)
		});
	}

	async deleteDataUsers(object) {
		// Delete Data product
		await fetch("http://5d230e064e05c600146efa7e.mockapi.io/mandala/users/"+object, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		});
	}

	handleDeleteUser(){
		let object = this.props.id;
		if (object) { 
			this.deleteDataUsers(object) 
		}
	}

	handleEditUser(){
		this.setState({
			show: false
		})
		
	}

	handleCancel(){
		this.setState({
			show: true
		})
	}

	handleSaveUser(){
		this.setState({
			show: true
		})
		const firstname = this.firstname.current.value;
		const lastname = this.lastname.current.value;
		const email = this.email.current.value;
		const password = this.password.current.value;
		let obj = {id: this.props.id, firstname, lastname, email, password};
		if (firstname && lastname && email && password) {
			this.editDataUsers(obj);
		}
		
	}

	render() {
		let {
			id,
			firstname,
			lastname,
			email,
			password,
			role
		} = this.props
		return (
			<tr className="row">
				<td className="col-lg-1">
					{id}
				</td>
				<td className="col-lg-2">
					{ (this.state.show) ?
						<span>{firstname}</span>
						:
							<input
								type="text"
								name="firstname"
								className="form-control"
								defaultValue={firstname}
								ref={this.firstname}
							/>
					}
				</td>
				<td className="col-lg-2">
					{ (this.state.show) ?
						<span>{lastname}</span>
						:
							<input
								type="text"
								name="lastname"
								className="form-control"
								defaultValue={lastname}
								ref={this.lastname}
							/>
					}
				</td>
				<td className="col-lg-3">
					{ (this.state.show) ?
						<span>{email}</span>
						:
							<input
								type="email"
								name="email"
								className="form-control"
								defaultValue={email}
								ref={this.email}
							/>
					}
				</td>
				<td className="col-lg-2">
					{ (this.state.show) ?
							<input
								type="password"
								name="password"
								className="form-control"
								defaultValue={password}
								ref={this.password}
								disabled
							/>
						:
							<input
								type="password"
								name="password"
								className="form-control"
								defaultValue={password}
								ref={this.password}
							/>
					}
				</td>
				<td className="col-lg-2">
					{ (this.state.show)
						?
							(role === 1) ? <></>
							:
							(
								<>
									<button type="button" className="btn btn-outline-primary mr-2" onClick={this.handleEditUser}>
										<i className="fas fa-pencil-alt"></i>
									</button>
									<button type="button" className="btn btn-outline-danger mr-2" onClick={this.handleDeleteUser}>
										<i className="fas fa-trash"></i>
									</button>
								</>
							)
						:
						(
							<>
								<button type="button" className="btn btn-outline-success mr-2" onClick={this.handleSaveUser}>
									<i className="fas fa-save"></i>
								</button>
								<button type="button" className="btn btn-outline-warning mr-2" onClick={this.handleCancel}>
									<i className="fas fa-window-close"></i>
								</button>
							</>
						)
					}
				</td>
			</tr>
		);
	}
}

export default (TableUserContent);