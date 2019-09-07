import { combineReducers } from "redux";
import homereducer from "./homereducer";
import productsreducer from "./productsreducer";
import userreducer from "./userreducer";


export default combineReducers({
    homereducer,
    productsreducer,
    userreducer
})
