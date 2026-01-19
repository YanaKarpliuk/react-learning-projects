import CreateCustomer from "./features/customers/CreateCustomer.jsx";
import Customer from "./features/customers/Customer.jsx";
import AccountOperations from "./features/accounts/AccountOperations.jsx";
import BalanceDisplay from "./features/accounts/BalanceDisplay.jsx";
import "./ReduxIntro.scss";

export default function ReduxIntro() {
  return (
      <main className="redux-intro-page">
        <h1 className="title">🏦 The React-Redux Bank ⚛️</h1>
        <CreateCustomer/>
        <Customer/>
        <AccountOperations/>
        <BalanceDisplay/>
      </main>
  );
}
