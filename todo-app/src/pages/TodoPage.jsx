import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";

const TodoPage = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
      <Link to={"/"}>
        <button style={{ marginTop: "40px" }}>Go To Home</button>
      </Link>
    </div>
  );
};

export default TodoPage;
