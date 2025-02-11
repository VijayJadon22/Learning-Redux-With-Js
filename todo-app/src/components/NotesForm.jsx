import React, { useState } from "react"; // Import React and useState hook
import { useDispatch, useSelector } from "react-redux"; // Import hooks from react-redux for dispatching actions and selecting state
// import { addNote } from "../redux/actions/notesActions"; // (Commented out) Import addNote action if it's used elsewhere
import { add } from "../redux/reducers/notesReducers"; // Import the add action from notesReducers
import { clearNotification } from "../redux/reducers/notificationReducers"; // Import the clearNotification action from notificationReducers

const NotesForm = () => {
  const [notesText, setNotesText] = useState(""); // useState hook to manage the notesText state
  const dispatch = useDispatch(); // useDispatch hook to dispatch actions

  const notification = useSelector((state) => state.notification.notification); // useSelector hook to access the notification state

  // Use a side effect to clear notification if it contains "Note" keyword
  if (notification && notification.includes("Note")) {
    setTimeout(() => {
      dispatch(clearNotification()); // Dispatch clearNotification action after 3 seconds
    }, 3000);
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (notesText) {
      dispatch(add(notesText)); // Dispatch add action from notesReducers with notesText as payload
      setNotesText(""); // Clear the notesText state
    }
  };

  return (
    <div>
      <h1>Notes App</h1>
      {notification.includes("Note") ? (
        <h3 style={{ color: "green" }}>{notification}</h3> // Display notification message if it includes "Note"
      ) : null}
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={notesText} // Set the value of textarea to notesText state
            onChange={(e) => setNotesText(e.target.value)} // Update notesText state on textarea change
          ></textarea>
          <button type="submit">Add Note</button> // Button to submit the form
        </form>
      </div>
    </div>
  );
};

export default NotesForm; // Export NotesForm component as default
