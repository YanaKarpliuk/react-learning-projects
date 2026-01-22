// used instead of createStore
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice.js";
import customerReducer from "./features/customers/customerSlice.js";

// Redux toolkit store.
const toolkitStore = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer
  }
})

export default toolkitStore
