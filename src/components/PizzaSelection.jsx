import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPizza } from "../redux/pizzaSlice";

const pizzas = ["Margherita", "Pepperoni", "BBQ Chicken", "Veggie", "Cheese"];

const PizzaSelection = () => {
  const dispatch = useDispatch();
  const selectedPizza = useSelector((state) => state.pizza.selectedPizza);

  return (
    <div>
      <h2>Hey Buddy, Select Your Pizza</h2>
      {pizzas.map((pizza) => (
        <button
          key={pizza}
          onClick={() => dispatch(selectPizza(pizza))}
          style={{
            margin: "5px",
            backgroundColor: selectedPizza === pizza ? "yellow" : "white",
          }}
        >
          {pizza}
        </button>
      ))}
    </div>
  );
};

export default PizzaSelection;
