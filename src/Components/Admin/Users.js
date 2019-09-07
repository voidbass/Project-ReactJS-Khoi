import React, { Component } from 'react';
import AddUser from "./component/Users-sub-component/AddUser";
import TableUser from "./component/Users-sub-component/TableUser";
import LayoutAdmin from "./component/LayoutAdmin";

class Users extends Component {
	constructor(props){
		super(props);
		this.state = {
			redirect: true
		}

		this.onClickAdd = this.onClickAdd.bind(this);
	}

	onClickAdd(){
		this.setState({
			redirect: !this.state.redirect
		})
	}

	render() {
		let tempUsers = JSON.parse(localStorage.getItem('admin'));
		if (tempUsers !== null && tempUsers !== undefined && tempUsers !== []) {
			return (
				<LayoutAdmin>
					{
						(this.state.redirect) ?
							<div className='pt-5'>
								<button className="mt-5 btn btn-primary text-uppercase" onClick={this.onClickAdd}>ADD USER</button>
								<TableUser />
							</div>
							:
							<AddUser onClickAdd={this.onClickAdd} />
					}
				</LayoutAdmin>
			);
		} else {
			window.location.href = "/admin";
		}
	}
}

export default (Users);