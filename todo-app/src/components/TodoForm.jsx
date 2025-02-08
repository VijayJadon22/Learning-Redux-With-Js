import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addTodo } from "../redux/actions/todoActions";
import { add } from "../redux/reducers/todoReducers";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //earlier we were using methods passed from props
    //   if (todoText) {
    //     createTodo(todoText);
    //     setTodoText("");
    //   }
    dispatch(add(todoText)); //using todoSlice actions
    setTodoText("");
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
