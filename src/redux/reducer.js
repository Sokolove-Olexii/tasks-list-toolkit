import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, toggleTask } from "./actions";

const initialState = [];

const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    })
    .addCase(toggleTask, (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    });
});

export default tasksReducer;
