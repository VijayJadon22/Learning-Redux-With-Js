import React from "react";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      <h3>All Todos</h3>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <span>{todo.text}</span>
            <button onClick={() => toggleTodo(index)}>
              {todo.completed ? "Completed" : "Complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
