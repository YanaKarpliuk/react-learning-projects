import { useSelector } from "react-redux";

export default function Customer() {
  const customer = useSelector((store) => store.customer.fullName)

  return <h2 className="customer-title">👋 Welcome, {customer}</h2>;
}
