import React, { useState } from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoAction from "../Todo-actions/TodoAction";
import TodoRender from "../TodoRender/TodoRender";
import "./Todo.css";

const initialFormData = {
  isEdit: false,
  todoName: "",
  todoNote: "",
  isFinished: false,
  id: "",
  index: null,
};

const Todo = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDisplayTodo, setIsOpenDisplayTodo] = useState(false);
  const [todo, setTodo] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const handleOpenDialog = setIsOpen((prevState)=>(!prevState))

  return (
    <div className="todo-wrapper">
      <TodoHeader />
      <TodoAction />
      <TodoRender />
    </div>
  );
};

export default Todo;
