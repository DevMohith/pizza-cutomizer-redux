import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPizza } from "../redux/pizzaSlice";

const pizzas = ["Margherita", "Pepperoni", "BBQ Chicken", "Veggie", "Cheese"];

const PizzaSelection = () => {
  const dispatch = useDispatch();
  const selectedPizza = useSelector((state) => state.pizza.selectedPizza);

  return (
    <div>
      <h2>🍕 Select Your Pizza 🍕</h2>
      <div className="pizza-container">
        {pizzas.map((pizza) => (
          <button
            key={pizza}
            className={`pizza-button ${selectedPizza === pizza ? "selected" : ""}`}
            onClick={() => dispatch(selectPizza(pizza))}
          >
            {pizza}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PizzaSelection;
