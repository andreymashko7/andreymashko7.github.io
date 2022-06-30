import React, { useState, useEffect, useRef } from "react";
import { TodoService } from "./../Api/TodoService";
import TodoList from "../components/Todo/TodoList/TodoList";
import TodoForm from "../components/Todo/TodoForm/TodoForm";
import TodoFilter from "../components/Todo/TodoFilter/TodoFilter";
import "../styles/styles.css";
import MyButton from "../components/UI/button/MyButton";
import Modal from "./../components/UI/MyModal/Modal";
import { useTodos } from "../hooks/useTodos";
import { BallTriangle } from "react-loader-spinner";
import { useFetching } from "./../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { useObserver } from "./../hooks/useObserver";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ title: "", completed: false });
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);

  const lastElement = useRef();

  const searchAndSortedTodos = useTodos(todos, filter.sort, filter.query);

  const [fetchTodos, isTodoLoading, todoError] = useFetching(
    async (limit, page) => {
      await TodoService.getAll(limit, page).then((response) => {
        setTodos([...todos, ...response.data]);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(getPageCount(totalCount, limit));
      });
    }
  );

  useObserver(lastElement, page < totalPages, isTodoLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchTodos(limit, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setModal(false);
  };

  const toggleChangeCompleted = (todo) => {};

  return (
    <div className="todo">
      <div className="todo__container">
        <MyButton className="btn__create" onClick={() => setModal(true)}>
          Create Todo
        </MyButton>
        <Modal visible={modal} setVisible={setModal}>
          <TodoForm create={createTodo} todo={todo} setTodo={setTodo} />
        </Modal>
        <TodoFilter filter={filter} setFilter={setFilter} />

        {isTodoLoading && (
          <BallTriangle color="tomato" height={100} width={100} />
        )}

        <TodoList
          todos={searchAndSortedTodos}
          remove={removeTodo}
          toggle={toggleChangeCompleted}
        />
        <div ref={lastElement} style={{ height: 20, background: "red" }} />

        {todoError && (
          <p className="todo__error">
            Whoops, something went wrong: {todoError}
          </p>
        )}
      </div>
    </div>
  );
};

export default Todos;
