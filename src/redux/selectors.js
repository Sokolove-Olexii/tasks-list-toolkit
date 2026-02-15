import { createSelector } from "@reduxjs/toolkit";
export const selectAllTasks = (state) => state.tasks;
export const selectFilters = (state) => state.filters;

export const selectVisibleTasks = createSelector(
  [selectAllTasks, selectFilters],
  (tasks, filters) => {
    const { status, search } = filters;

    return tasks.filter((task) => {
      const matchesStatus =
        status === "all" ||
        (status === "completed" && task.completed) ||
        (status === "active" && !task.completed);
      const matchesSearch = task.text
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  },
);
