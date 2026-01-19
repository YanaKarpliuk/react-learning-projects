import { useState } from "react";

export default function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  function handleDeposit() {
  }

  function handleWithdrawal() {
  }

  function handleRequestLoan() {
  }

  function handlePayLoan() {
  }

  return (
      <div className="form operations-form">
        <h2>Your account operations</h2>
        <div className="form-row four-col">
          <label htmlFor="deposit">Deposit</label>
          <input
              id="deposit"
              type="number"
              placeholder="Deposit amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div className="form-row four-col">
          <label htmlFor="withdraw">Withdraw</label>
          <input
              id="withdraw"
              type="number"
              placeholder="Withdrawal amount"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div className="form-row four-col">
          <label htmlFor="requestLoan">Request loan</label>
          <input
              id="requestLoan"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              placeholder="Loan amount"
          />
          <input
              value={loanPurpose}
              onChange={(e) => setLoanPurpose(e.target.value)}
              placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        <div className="form-row four-col">
          <span>Pay back $X</span>
          <button aria-label="Pay loan" onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
  );
}
