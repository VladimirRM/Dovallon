import React from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import "./Todo.css";
import TodoAction from "../Todo-actions/TodoAction";
import TodoRender from "../TodoRender/TodoRender";

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
