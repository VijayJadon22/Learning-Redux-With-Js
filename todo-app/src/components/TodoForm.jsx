import React, { useState } from "react"; // Import React and the useState hook
import { useDispatch, useSelector } from "react-redux"; // Import hooks from react-redux for dispatching actions and selecting state
// import { addTodo } from "../redux/actions/todoActions"; // (Commented out) Import addTodo action if it's used elsewhere
import { add } from "../redux/reducers/todoReducers"; // Import the add action from todoReducers
import { clearNotification } from "../redux/reducers/notificationReducers"; // Import the clearNotification action from notificationReducers

const TodoForm = () => {
  const [todoText, setTodoText] = useState(""); // useState hook to manage the todoText state
  const dispatch = useDispatch(); // useDispatch hook to dispatch actions

  const notification = useSelector((state) => state.notification.notification); // useSelector hook to access the notification state

  // Use a side effect to clear notification if it contains "Todo"
  if (notification && notification.includes("Todo")) {
    setTimeout(() => {
      dispatch(clearNotification()); // Dispatch clearNotification action after 3 seconds
    }, 3000);
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Earlier we were using methods passed from props
    // if (todoText) {
    //   createTodo(todoText);
    //   setTodoText("");
    // }
    dispatch(add(todoText)); // Dispatch add action from todoReducers with todoText as payload
    setTodoText(""); // Clear the todoText state
  };

  return (
    <div>
      {notification.includes("Todo") ? (
        <h3 style={{ color: "green" }}>{notification}</h3> // Display notification message if it includes "Todo"
      ) : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText} // Set the value of input to todoText state
          onChange={(e) => setTodoText(e.target.value)} // Update todoText state on input change
        />
        <button type="submit">Add Todo</button> 
      </form>
    </div>
  );
};

export default TodoForm; // Export TodoForm component as default
