import React from "react";
import PizzaSelection from "./components/PizzaSelection";
import ToppingsSelection from "./components/ToppingsSelection";
import OrderSummary from "./components/OrderSummary";
import "./index.css";

const App = () => {
  return (
    <div className="animated-background">
      <div style={{ textAlign: "center", background: "white", padding: "20px", borderRadius: "15px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        <h1>🍕 Build Your Pizza 🍕</h1>
        <PizzaSelection />
        <ToppingsSelection />
        <OrderSummary />
      </div>
    </div>
  );
};

export default App;
