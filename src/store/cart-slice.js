import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartIsShown: false,
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  cartIsEmpty: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    addItemToCart(state, action) {
      state.totalQuantity++;
      state.cartIsEmpty = false;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      if (state.items.length === 0) {
        state.cartIsEmpty = true;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
