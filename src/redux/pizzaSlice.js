import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPizza: "",
  toppings: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    selectPizza: (state, action) => {
      state.selectedPizza = action.payload;
      state.toppings = [];
    },
    addTopping: (state, action) => {
      if (!state.toppings.includes(action.payload)) {
        state.toppings.push(action.payload);
      }
    },
    removeTopping: (state, action) => {
      state.toppings = state.toppings.filter((topping) => topping !== action.payload);
    },
  },
});

export const { selectPizza, addTopping, removeTopping } = pizzaSlice.actions;

export default pizzaSlice.reducer;
