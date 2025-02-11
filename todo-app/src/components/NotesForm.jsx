import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addNote } from "../redux/actions/notesActions";
import { add } from "../redux/reducers/notesReducers";

const NotesForm = () => {
  const [notesText, setNotesText] = useState("");
  const dispatch = useDispatch();

  const notification = useSelector(state => state.notification.notification);

  // if (notification && notification.includes("Note")) {
  //   setTimeout(() => {
  //     dispatch
  //   },3000)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notesText) {
      dispatch(add(notesText)); //using noteSlice actions
      setNotesText("");
    }
  };
  return (
    <div>
      <h1>Notes App</h1>
      {notification.includes("Note") ? (
        <h3 style={{ color: "green" }}>{notification}</h3>
      ) : null}
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
          ></textarea>
          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
  );
};

export default NotesForm;
