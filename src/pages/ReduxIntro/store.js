import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice.js";
import customerReducer from "./features/customers/customerSlice.js";

// Combine several reducers.
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer
})

// Actions will be dispatched on this store.
const store = createStore(rootReducer)

export default store
