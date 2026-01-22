import { useSelector } from "react-redux";
import CreateCustomer from "./features/customers/CreateCustomer.jsx";
import Customer from "./features/customers/Customer.jsx";
import AccountOperations from "./features/accounts/AccountOperations.jsx";
import BalanceDisplay from "./features/accounts/BalanceDisplay.jsx";
import "./ReduxToolkitIntro.scss";

export default function ReduxToolkitIntro() {
  const customerFullname = useSelector(store => store.customer.fullName)

  return (
      <main className="redux-intro-page">
        <h1 className="title">🏦 The React-Redux Bank ⚛️</h1>
        {customerFullname === "" ?
            <CreateCustomer/> :
            <>
              <Customer/>
              <AccountOperations/>
              <BalanceDisplay/>
            </>
        }
      </main>
  );
}
