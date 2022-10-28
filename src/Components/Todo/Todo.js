import React ,{useState}from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoAction from "../Todo-actions/TodoAction";
import TodoRender from "../TodoRender/TodoRender";
import './Todo.css'

const Todo = () => {
  const [tab, setTab]= useState()
  return (
    <div className="todo-wrapper">
      <TodoHeader />
      <TodoAction />
      <TodoRender />
    </div>
  );
};

export default Todo;
