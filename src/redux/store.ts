import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./categorySlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
