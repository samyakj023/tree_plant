import { useEffect } from "react";
import "../styles/Donate.css";
import { Link } from "react-router-dom";


function Donate() {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_M3sK6rX01PxvmJ";
      rzpPaymentForm.appendChild(script);
    }
  }, []);
  return (
    <div className="donate">
      <div className="form-container">
        <div>you are one step closer to taking a effort
        </div>
        <form id="rzp_payment_form"></form>
      </div>
      <Link to={"/"} className="back-btn" role="button">
        Go Back
      </Link>
    </div>
  );
}
export default Donate;
