import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import timePeriodReducer from "./timePeriodSlice";
import themeReducer from "./themeSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  categoryOrder: categoryReducer,
  timePeriod: timePeriodReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
