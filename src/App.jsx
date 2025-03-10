import React from "react";
import PizzaSelection from "./components/PizzaSelection";
import ToppingsSelection from "./components/ToppingsSelection";
import OrderSummary from "./components/OrderSummary";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🍕 Build Your Pizza 🍕</h1>
      <PizzaSelection />
      <ToppingsSelection />
      <OrderSummary />
    </div>
  );
};

export default App;
