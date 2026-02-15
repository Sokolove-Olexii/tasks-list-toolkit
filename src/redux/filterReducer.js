import { createReducer } from "@reduxjs/toolkit";
import { setStatusFilter, setSearchFilter } from "./actions";

const initialState = {
  status: "all",
  search: "",
};

const filtersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setStatusFilter, (state, action) => {
      state.status = action.payload;
    })
    .addCase(setSearchFilter, (state, action) => {
      state.search = action.payload;
    });
});

export default filtersReducer;
