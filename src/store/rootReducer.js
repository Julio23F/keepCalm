import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
import loadingReducer from "../features/network/loadingSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
});

export default rootReducer;
