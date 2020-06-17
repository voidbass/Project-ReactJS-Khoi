import axios from 'axios';

export function GET_HOMEDATA(params) {
	return async (dispatch) => {
		try {
			const res = await axios.get('https://5d230e064e05c600146efa7e.mockapi.io/mandala/products', {
				params: {
					limit: 9,
					page: params ? params : 1,
				}
			});
			dispatch(fetchSuccess(res.data));
		}
		catch (err) {
			dispatch(fetchError(err));
		}
	}
}

export function EDIT_HOMEDATA(id, data) {
	return async (dispatch) => {
		try {
			const res = await axios.put('https://5d230e064e05c600146efa7e.mockapi.io/mandala/products/' + id, data
			);
			dispatch(fetchSuccess(res.data));
		}
		catch (err) {
			dispatch(fetchError(err));
		}
	}
}

export function fetchSuccess(res) {
	return { type: 'HOME_OK', data: res }
}

export function fetchError(err) {
	return { type: 'HOME_ERROR', data: err }
}