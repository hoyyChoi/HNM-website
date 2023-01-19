import { combineReducers } from "redux";
import productReducer from "./productReducer";
import loginReducer from "./loginReducer";
import detailReducer from "./detailReducer";

export default combineReducers({
    auth :loginReducer,
    product : productReducer,
    detail : detailReducer
})