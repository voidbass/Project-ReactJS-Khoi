import axios from 'axios';

export function GET_PRODUCTDATA(){
	return (dispatch) => {
		return axios.get('https://5d230e064e05c600146efa7e.mockapi.io/mandala/products')
		.then(res => {
			dispatch(fetchSuccess(res.data));
		})
		.catch(err => {
			dispatch(fetchError(err));
		 })
	}
}

export function addItemSelected(item) {
    return { type: "ADD_CART", item }
}

export function fetchSuccess(res) {
	return { type: 'PRODUCT_OK', data: res}
}

export function fetchError(err) {
	return { type: 'PRODUCT_ERROR', data: err}
}