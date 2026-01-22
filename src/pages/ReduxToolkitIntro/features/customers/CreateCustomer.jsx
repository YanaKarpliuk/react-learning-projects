import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice.js";

export default function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    if (!fullName || !nationalId) return
    dispatch(createCustomer(fullName, nationalId))
  }

  return (
      <form className="form customer-form" onSubmit={handleSubmit}>
        <h2>Create new customer</h2>
        <div className="form-row two-col">
          <label htmlFor="fullname">Customer full name</label>
          <input
              id="fullname"
              value={fullName}
              required={true}
              onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-row two-col">
          <label htmlFor="nationalId">National ID</label>
          <input
              id="nationalId"
              value={nationalId}
              required={true}
              onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <input
            aria-label="Create new customer"
            value={"Create new customer"}
            type="submit"
        />
      </form>
  );
}
