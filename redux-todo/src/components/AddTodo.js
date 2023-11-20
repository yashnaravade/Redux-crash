// AddTodo.js
import React from "react";
import "./AddTodo.css";
import { useDispatch } from "react-redux";
import { addTodoAction } from "./Todos"; // Don't forget to import your action.

function AddTodo() {
  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: new Date().getTime(),
      title: e.target.todo.value,
      completed: false,
    };
    dispatch(addTodoAction(todo));
    e.target.todo.value = "";
  };

  return (
    <div className="add-todo-container">
      <h1>Add Todo</h1>
      <form onSubmit={addTodo} className="add-todo-form">
        <label htmlFor="todo">Todo</label>
        <input type="text" id="todo" name="todo" />
        <button type="submit" className="btn">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
