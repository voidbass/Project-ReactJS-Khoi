import { GET_PRODUCTDATA } from './ProductsAction';

export const mapDispatchToProps = dispatch => {
    return {
        getProductData: (state) => dispatch(GET_PRODUCTDATA(state))
    }
}
export const mapStateToProps = state => {
    return {
        getProductData: state.productSelected
    }
}