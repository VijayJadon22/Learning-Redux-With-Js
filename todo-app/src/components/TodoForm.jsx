import React, { useState } from "react";

const TodoForm = ({ createTodo }) => {
  const [todoText, setTodoText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText) {
      createTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
