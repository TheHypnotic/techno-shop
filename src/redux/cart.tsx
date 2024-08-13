import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../components/navbar/shoppingCart";

interface CartState {
  cartlist: CartItem[];
  numberCart: number;
}
const initialState: CartState = { cartlist: [], numberCart: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
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
    removeItem(state, action: PayloadAction<{ id: number }>) {
      const existingItem = state.cartlist.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.amount === 1) {
          state.cartlist = state.cartlist.filter(
            (item) => item.id !== action.payload.id
          );
        }
        if (existingItem) {
          existingItem.amount -= 1;
        }

        state.numberCart -= 1;
      }
    },
    removeItemCompletely(state, action: PayloadAction<{ id: number }>) {
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
