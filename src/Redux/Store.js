import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducers/Counter";

export const store = configureStore({
  reducer: {
    cartCount: counterReducer,
  },
});
