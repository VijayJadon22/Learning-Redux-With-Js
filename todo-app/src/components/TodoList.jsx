import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { toggleTodo } from "../redux/actions/todoActions";
import { toggle } from "../redux/reducers/todoReducers";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div>
      <h3>All Todos</h3>
      <div>
        {todos?.map((todo, index) => (
          <div key={index}>
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(toggle(index))}
              style={{ backgroundColor: todo.completed ? "green" : "red" }}
            >
              {todo.completed ? "Completed" : "Complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
