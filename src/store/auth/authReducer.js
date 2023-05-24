import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  authData: {
    accessToken: null,
    isLoading: false,
    error: null,
    id: null,
  },
};
export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      return {
        ...state,
        authData: {
          ...state.authData,
          isLoading: true,
        },
      };
    },
    loginSucess: (state, action) => {
      return {
        ...state,
        authData: {
          ...state.authData,
          accessToken: action.payload.accessToken,
          isLoading: false,
          error: null,
          id: action.payload.id,
        },
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
        authData: {
          ...state.authData,
          isLoading: false,
          error: action.payload,
        },
      };
    },
    logOutSucess: (state) => {
      return {
        ...state,
        authData: {
          ...state.authData,
          accessToken: null,
          isLoading: false,
          error: null,
          id: null,
        },
      };
    },
  },
});

export const { loginFailure, loginStart, loginSucess, logOutSucess } =
  authReducer.actions;
export default authReducer.reducer;
