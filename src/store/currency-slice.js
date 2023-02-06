import { createSlice } from "@reduxjs/toolkit";

const initialCurrencyState = {
  selectedCurrency: "$",
  isActive: {
    dollar: true,
    euro: false,
    yen: false,
    currencyDropdown: false,
  },
};

const currencySlice = createSlice({
  name: "currency",
  initialState: initialCurrencyState,
  reducers: {
    changeCurrency(state, action) {
      const currency = action.payload;
      state.selectedCurrency = currency;
      if (currency === "$") {
        state.isActive.dollar = true;
        state.isActive.euro = false;
        state.isActive.yen = false;
      } else if (currency === "€") {
        state.isActive.euro = true;
        state.isActive.dollar = false;
        state.isActive.yen = false;
      } else if (currency === "¥") {
        state.isActive.yen = true;
        state.isActive.dollar = false;
        state.isActive.euro = false;
      }
    },
    toggleCurrDropdown(state) {
      state.isActive.currencyDropdown = !state.isActive.currencyDropdown;
    },
  },
});

export const currencyActions = currencySlice.actions;

export default currencySlice;
