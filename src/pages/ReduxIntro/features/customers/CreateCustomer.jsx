import { useState } from "react";

export default function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  function handleClick() {
  }

  return (
      <form className="form customer-form">
        <h2>Create new customer</h2>
        <div className="form-row two-col">
          <label htmlFor="fullname">Customer full name</label>
          <input
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-row two-col">
          <label htmlFor="nationalId">National ID</label>
          <input
              id="nationalId"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button
            aria-label="Create new customer"
            onClick={handleClick}
        >
          Create new customer
        </button>
      </form>
  );
}
