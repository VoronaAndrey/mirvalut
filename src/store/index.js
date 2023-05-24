import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authReducer } from "./auth/authReducer";
import { postsReducer } from "./posts/postsReducer";
import { userReducer } from "./user/userReducer";
import { currencyReducer } from "./currency/currencyReducer";

const rootReducer = combineReducers({
  auth: authReducer.reducer,
  user: userReducer.reducer,
  posts: postsReducer.reducer,
  currency: currencyReducer.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const useAppDispatch = useDispatch;
