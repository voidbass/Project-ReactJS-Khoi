import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableUserContent from './TableUserContent';
import { GET_USERDATA } from '../../../../Store/actions/UserAction';

class TableUser extends Component {
	constructor(props){
		super(props);
		this.state = {
			show: true
		};
	}
	componentDidUpdate(){
		this.props.usersUpdate();
	}

	render() {
		let List__User = this.props.users;
		let tempUsers = []
		if (List__User.length > 0) {
			for (var item of List__User) {
				if (item){
					tempUsers.push(item);
				}
			}
		}
		return (
			<table className='row mt-5 border'>
				<tbody className="col-lg-12">
					<tr className="row mt-5">
						<th className="col-lg-1">ID</th>
						<th className="col-lg-2">FIRSTNAME</th>
						<th className="col-lg-2">LASTNAME</th>
						<th className="col-lg-3">EMAIL</th>
						<th className="col-lg-2">PASSWORD</th>
						<th className="col-lg-2">EDIT</th>
					</tr>
					{
						tempUsers.map((user,idx) => <TableUserContent 	key = {user.id}
																		id = {user.id}
																		firstname={user.firstname}
																		lastname={user.lastname}
																		email={user.email}
																		password={user.password}
																		role={user.role}
												/>
						)
					}
				</tbody>
			</table>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableUser);