import { useState, useEffect } from "react";
import "./Stripe.css";

export default function Stripe2() {
  const [amount, setAmount] = useState("");

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  const handleCheckout = async (e) => {
    e.preventDefault();
    const paymentAmount = parseFloat(amount);
    if (isNaN(paymentAmount) || paymentAmount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      // console.log("Sending request with amount:", paymentAmount);
      // Debugging log
      const response = await fetch(`${backendUrl}/test_key`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: paymentAmount }),
      });

      // console.log("Response status:", response.status);
      // Debugging log

      if (!response.ok) {
        const errorText = await response.text();
        // console.error("Response error details:", errorText);
        // Debugging log
        throw new Error("Network response was not ok");
      }

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Unexpected response from the server.");
      }
    } catch (error) {
      console.error("Error processing checkout:", error);
    }
  };

  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Payment successful!");
    } else if (query.get("canceled")) {
      setMessage("Order canceled");
    }
  }, []);

  return (
    <div>
      {message ? (
        <Message message={message} />
      ) : (
        <section style={{ pointerEvents: "auto" }}>
          <div className="stripe">
            <div className="input-header">
              <p> $ </p>
              <input
                type="number"
                id="amount"
                name="amount"
                min="1"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="donate-input"
              />
            </div>

            <button type="button" onClick={handleCheckout}>
              DONATE !
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
