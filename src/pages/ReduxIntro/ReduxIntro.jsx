import CreateCustomer from "./CreateCustomer";
import Customer from "./Customer";
import AccountOperations from "./AccountOperations";
import BalanceDisplay from "./BalanceDisplay";
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
