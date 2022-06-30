import React, { useState } from "react";
import MyInput from "./../../UI/input/MyInput";
import MyButton from "./../../UI/button/MyButton";

const TodoForm = ({ create, todo, setTodo }) => {
  //  const [todo, setTodo] = useState({ title: "", completed: false });

  const addNewTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      title: todo.title,
      completed: false,
      id: Date.now().toString(),
    };
    create(newTodo);
  };

  return (
    <form>
      <div>
        <MyInput
          type="text"
          placeholder="todo-title"
          value={todo.title}
          onChange={(e) => setTodo({ title: e.target.value })}
        />
      </div>
      <MyButton type="button" className="btn__create" onClick={addNewTodo}>
        create todo
      </MyButton>
    </form>
  );
};

export default TodoForm;
