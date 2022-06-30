import React from "react";
import { ReactComponent as Logo } from "../../../img/icons/remove.svg";
import { ReactComponent as LogoIcon } from "../../../img/icons/completed.svg";
import "./TodoItem.css";

const TodoItem = ({ todo, remove, toggle, number }) => {
  return (
    <ul className="todo__list">
      <li className="todo__item">
        <h2
          className={
            todo.completed ? "todo__title title-through" : "todo__title"
          }
        >
          {number}. {todo.title}
        </h2>
        <div>
          <LogoIcon
            value={todo.completed}
            onClick={() => {
              toggle(todo);
            }}
            className={
              todo.completed ? "icon__completed icon" : "icon__inCompleted icon"
            }
          />
          <Logo
            className="icon__remove"
            onClick={() => {
              remove(todo);
            }}
          />
        </div>
      </li>
    </ul>
  );
};

export default TodoItem;
