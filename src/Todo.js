import React from "react";
import TodoHeader from "./Components/TodoHeader/TodoHeader";
import "./Todo.css";
import TodoAction from "./Components/Todo-actions/TodoAction";
import TodoRender from "./Components/TodoRender/TodoRender";

const Todo = () => {
  return (
    <div className="todo-wrapper">
      <TodoHeader />
      <TodoAction />
      <TodoRender />
    </div>
  );
};

export default Todo;
