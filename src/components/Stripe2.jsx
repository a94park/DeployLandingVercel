import { useState, useEffect } from "react";

const ProductDisplay = () => (
  <section style={{ pointerEvents: "auto" }}>
    <div className="product">
      <div className="description">
        <h3>Donations</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <form action={`${import.meta.env.VITE_API_URL}/test_key`} method="POST">
      <button type="submit">Checkout</button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Stripe2() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Payment successful!");
    }

    if (query.get("canceled")) {
      setMessage("Order canceled");
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
