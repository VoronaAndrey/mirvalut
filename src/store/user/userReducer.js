import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    user: null,
    error: null,
  },
};
export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStart: (state) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          isLoading: true,
        },
      };
    },
    userSucess: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          user: action.payload,
          isLoading: false,
          error: null,
        },
      };
    },
    userFailure: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          isLoading: false,
          error: action.payload,
        },
      };
    },
  },
});

export const { userStart, userSucess, userFailure } = userReducer.actions;
export default userReducer.reducer;
