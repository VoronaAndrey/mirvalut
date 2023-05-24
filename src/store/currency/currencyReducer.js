import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: {
    data: [
      {
        name: "Доллар США",
        cod: "USD",
        purchase: 37.412,
        sale: 36.412,
      },
      {
        name: "Евро",
        cod: "EUR",
        purchase: 40.412,
        sale: 39.42,
      },
      {
        name: "Фунт",
        cod: "GBP",
        purchase: 45.0,
        sale: 41.402,
      },
      {
        name: "Злотый",
        cod: "PLN",
        purchase: 20.1,
        sale: 16.412,
      },
      {
        name: "Грузинские лари",
        cod: "GEL",
        purchase: 24.1,
        sale: 19.412,
      },
    ],
  },
};
export const currencyReducer = createSlice({
  name: "currency",
  initialState,
  reducers: {
    currencyStart: (state) => {
      return {
        ...state,
        currency: {
          ...state.currency,
          isLoading: true,
        },
      };
    },
    currencySuccess: (state, action) => {
      return {
        ...state,
        currency: {
          ...state.currency,
          data: action.payload.data.data,
          isLoading: false,
          error: null,
        },
      };
    },
  },
});

export const { currencyStart, currencySuccess } = currencyReducer.actions;
export default currencyReducer.reducer;
