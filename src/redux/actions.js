import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", (text) => {
  return {
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
});

export const deleteTask = createAction("tasks/deleteTask");
export const toggleTask = createAction("tasks/toggleTask");

export const setStatusFilter = createAction("filters/setStatus");
export const setSearchFilter = createAction("filters/setSearch");
