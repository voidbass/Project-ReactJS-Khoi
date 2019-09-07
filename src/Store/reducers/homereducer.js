export default function homereducer(state = [], action) {
	switch (action.type) {
		case 'HOME_OK':
			state = [...action.data];
			return state;
		case 'HOME_ERROR':
			state = [...action.data];
			return state;
		default:
			return [...state];
	}
}