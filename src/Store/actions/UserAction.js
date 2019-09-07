import axios from 'axios';

export function GET_USERDATA(){
	return (dispatch) => {
		return axios.get('https://5d230e064e05c600146efa7e.mockapi.io/mandala/users')
		.then(res => {
			dispatch(fetchUserSuccess(res.data));
		})
		.catch(err => {
			dispatch(fetchUserError(err));
		 })
	}
}

export function EDIT_USERDATA(id, firstname, lastname, email, password){
	return (dispatch) => {
		return axios.put('https://5d230e064e05c600146efa7e.mockapi.io/mandala/user/'+id, firstname, lastname, email, password
			)
		.then(res => {
			dispatch(fetchUserEditSuccess(res.firstname, res.lastname), res.email, res.password);
		})
		.catch(err => {
			dispatch(fetchUserEditError(err));
		 })
	}
}

export function fetchUserSuccess(res) {
	return { type: 'USER_OK', data: res}
}

export function fetchUserError(err) {
	return { type: 'USER_ERROR', data: err}
}

export function fetchUserEditSuccess(res) {
	return { type: 'USEREDIT_OK', data: res}
}

export function fetchUserEditError(err) {
	return { type: 'USEREDIT_ERROR', data: err}
}

export function loadDataUsers(list) {
	return { type: 'LOAD_DATA_USERS', list }
}

export function deleteUser(id){
	return {
		type: "DELETEUSER",
		id: id
	}
}

export function saveEditUser(id, firstname, lastname, email, password){
	return {
		type: "EDITUSER",
		id: id,
		firstname: firstname,
		lastname: lastname,
		email: email,
		password: password
	}
}

export function addItemUser(firstname, lastname, email, password){
	return {
		type: "ADDUSER",
		firstname: firstname,
		lastname: lastname,
		email: email,
		password: password
	}
}