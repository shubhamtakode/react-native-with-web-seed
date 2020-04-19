import {combineReducers} from "redux";
import {userReducer} from "./User";

const reducer = combineReducers( {
  user: userReducer,
} );

export default reducer;
