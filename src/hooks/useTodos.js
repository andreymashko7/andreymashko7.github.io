import { useMemo } from "react";

const useSortedTodos = (todos, sort) => {
  const sortedTodos = useMemo(() => {
    if (sort) {
      return [...todos].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return todos;
  }, [todos, sort]);

  return sortedTodos;
};

export const useTodos = (todos, sort, query) => {
  const sortedTodos = useSortedTodos(todos, sort);

  const searchAndSortedTodos = useMemo(() => {
    return sortedTodos.filter((todo) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedTodos]);
  return searchAndSortedTodos;
};
