import React, { useState } from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoAction from "../Todo-actions/TodoAction";
import TodoRender from "../TodoRender/TodoRender";
import "./Todo.css";

const Todo = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDisplayTodo, setIsOpenDisplayTodo] = useState(false);
  const [todo, setTodo] = useState()
  return (
    <div className="todo-wrapper">
      <TodoHeader />
      <TodoAction />
      <TodoRender />
    </div>
  );
};

export default Todo;
