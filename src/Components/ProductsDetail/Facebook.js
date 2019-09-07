import React, { Component} from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
// import { loadDataCarts } from "../../redux/actions";
import { connect } from "react-redux";

const urlCarts = process.env.REACT_APP_CARTS;

class Facebook extends Component {
    state = {
        isLoggedIn: false
    };

    componentDidMount() {
        // Fetch Data Carts from API
        const { dataCart } = this.props;
        fetch(urlCarts)
            .then(res => res.json())
            .then(
                (result) => {
                    dataCart(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    handleResponse = (data) => {
        if (data.tokenDetail.accessToken) {
            localStorage.setItem('access', JSON.stringify(data)); // Set flat and data to know login by facebook
            this.loadDataCartFb();
            window.location.reload();
        }
    };

    handleError = (error) => {
        console.log(error);
    };

    loadDataCartFb() {
        const { carts } = this.props;
        const access = JSON.parse(localStorage.getItem("access"));
        let cloneCarts = carts;

        // Get Data carts of account login by fb
        if (access) {
            const cart = cloneCarts.find(c => c.idUser === access.profile.id);
            if (cart)
                localStorage.setItem("id-item--cart", JSON.stringify(cart.itemSelected));
        }
    }

    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = null;
        } else {
            fbContent = (
                <FacebookProvider appId="434258054098528">
                    <LoginButton
                        scope="email"
                        onCompleted={this.handleResponse}
                        onError={this.handleError}
                        className="btn w-100"
                    >
                        {this.props.children}
                    </LoginButton>
                </FacebookProvider>
            );
        }
        return (
            <div>{fbContent}</div>
        );
    }
}
function mapStateToProps(state) {
    return {
        carts: state.carts
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         dataCart: (list) => {
//             dispatch(loadDataCarts(list));
//         }
//     };
// }

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);