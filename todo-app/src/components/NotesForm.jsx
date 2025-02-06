import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions/notesActions";

const NotesForm = () => {
  const [notesText, setNotesText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notesText) {
      dispatch(addNote(notesText));
      setNotesText("");
    }
  };
  return (
    <div>
      <h1>Notes App</h1>
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
