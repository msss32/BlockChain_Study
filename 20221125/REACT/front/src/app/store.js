import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
