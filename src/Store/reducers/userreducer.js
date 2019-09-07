export default function userreducer(state = [], action) {
	switch (action.type) {
		case 'USER_OK':
			state = [...action.data];
			return state;
		case 'USER_ERROR':
		console.log(action.data)
			state = [...action.data];
			return state;
		case 'DELETEUSER':
			state = [...action.data]
			return state.splice(action.data.id, 1);
		case 'USEREDIT_OK':
			state[action.id].firstname = action.firstname;
			state[action.id].lastname = action.lastname;
			state[action.id].email = action.email;
			state[action.id].password = action.password;
			return state
		case 'USEREDIT_ERROR':
			state = [...action.data];
			return state;
		default:
			return [...state];
	}
}