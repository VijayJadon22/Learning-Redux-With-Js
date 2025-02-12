import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteNote } from "../redux/actions/notesActions";
import { deleteNote } from "../redux/reducers/notesReducers";

const NotesList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes);
  return (
    <div>
      <h2>Notes List</h2>
      <div>
        {notes?.map((note, index) => (
          <div key={index}>
            <span>{note.text}</span>
            <button onClick={() => dispatch(deleteNote(index))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
