import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartlist: [], numberCart: 0 },
  reducers: {
    addItem(state, action) {
      const existingItem = state.cartlist.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.cartlist.push({ ...action.payload, amount: 1 });
      }
      state.numberCart += 1;
    },
    removeItem(state, action) {
      const existingItem = state.cartlist.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem.amount === 1) {
        state.cartlist = state.cartlist.filter(
          (item) => item.id !== action.payload.id
        );
      }
      if (existingItem) {
        existingItem.amount -= 1;
      }

      state.numberCart -= 1;
    },
    removeItemCompletely(state, action) {
      const itemToRemove = state.cartlist.find(
        (item) => item.id === action.payload.id
      );

      if (itemToRemove) {
        state.cartlist = state.cartlist.filter(
          (item) => item.id !== action.payload.id
        );
        state.numberCart -= itemToRemove.amount;
      }
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const actions = cartSlice.actions;
export default store;
