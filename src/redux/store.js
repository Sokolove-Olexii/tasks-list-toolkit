import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducer";
import filtersReducer from "./filterReducer";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer,
  },
});
