import { GET_HOMEDATA } from './HomeAction';
import { GET_USERDATA } from './UserAction';

export const mapDispatchToProps = dispatch => {
    return {
        getHomeData: (state) => dispatch(GET_HOMEDATA(state)),
        getUserData: (state) => dispatch(GET_USERDATA(state))
    }
}
export const mapStateToProps = state => {
    return {
        getHomeData: state.homereducer,
        getUserData: state.userreducer
    }
}