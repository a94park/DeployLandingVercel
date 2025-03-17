import { useState } from "react";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const paymentAmount = parseFloat(amount);
    if (isNaN(paymentAmount) || paymentAmount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/test_key`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: paymentAmount }),
      });

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url; // Redirect to Stripe Checkout
      } else {
        alert("Error creating payment session");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed, try again");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-sm mx-auto"
      style={{ pointerEvents: "auto" }}>
      <label htmlFor="amount" className="text-lg font-semibold">
        Enter Amount (USD):
      </label>
      <input
        type="number"
        id="amount"
        name="amount"
        min="1"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
