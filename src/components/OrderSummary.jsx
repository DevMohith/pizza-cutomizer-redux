import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const { selectedPizza, toppings } = useSelector((state) => state.pizza);

  return (
    <div>
      <h2>Order Summary</h2>
      {selectedPizza ? (
        <>
          <p><strong>Pizza:</strong> {selectedPizza}</p>
          <p><strong>Toppings:</strong> {toppings.length ? toppings.join(", ") : "No toppings selected"}</p>
        </>
      ) : (
        <p>Please select a pizza.</p>
      )}
    </div>
  );
};

export default OrderSummary;
