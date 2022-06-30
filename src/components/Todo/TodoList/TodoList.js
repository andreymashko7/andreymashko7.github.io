import React from "react";
import TodoItem from "./../TodoItem/TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import popTransition from "./transitions/pop.module.css";
// import slideTransition from "./transitions/slide.module.css";

const TodoList = ({ todos, remove, toggle }) => {
  if (!todos.length) {
    return <h1 className="no-todo__title">No todo</h1>;
  }
  return (
    <>
      <TransitionGroup
        component="ul"
        //   className={styles.list}
      >
        {todos.map((todo, index) => (
          <CSSTransition key={todo.id} timeout={200} classNames={popTransition}>
            <TodoItem
              todo={todo}
              //   key={todo.id}
              remove={remove}
              number={index + 1}
              toggle={toggle}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default TodoList;
