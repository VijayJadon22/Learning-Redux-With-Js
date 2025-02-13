import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { toggleTodo } from "../redux/actions/todoActions";
import { toggle } from "../redux/reducers/todoReducers";

const TodoList = () => {
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todo.todos);

  //1st way to directly get the data intot he component using useEffect
  const [todos, setTodos] = useState(null);
  // console.log(todos);
  useEffect(() => {
    fetch("http://localhost:4100/get/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Ensure this is properly called on the correct response object
      })
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
