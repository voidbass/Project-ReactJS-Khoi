export default function homereducer(initialState = [], action) {
	switch (action.type) {
		case 'HOME_OK':
			return { ...initialState, data: action.data }

		case 'HOME_ERROR':
			return { ...initialState, data: action.data }
		default:
			return { ...initialState };
	}
}