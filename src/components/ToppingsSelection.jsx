import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopping, removeTopping } from "../redux/pizzaSlice";

const toppings = ["Cheese", "Pepperoni", "Onions", "Olives", "BBQ Chicken"];

const ToppingsSelection = () => {
  const dispatch = useDispatch();
  const selectedToppings = useSelector((state) => state.pizza.toppings);
  const selectedPizza = useSelector((state) => state.pizza.selectedPizza);

  return (
    <div>
      <h2>Select Toppings</h2>
      {selectedPizza ? (
        toppings.map((topping) => (
          <button
            key={topping}
            onClick={() =>
              selectedToppings.includes(topping)
                ? dispatch(removeTopping(topping))
                : dispatch(addTopping(topping))
            }
            style={{
              margin: "5px",
              backgroundColor: selectedToppings.includes(topping) ? "green" : "white",
            }}
          >
            {topping}
          </button>
        ))
      ) : (
        <p>Please select a pizza first.</p>
      )}
    </div>
  );
};

export default ToppingsSelection;
