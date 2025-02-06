import React from "react";
import NotesForm from "../components/NotesForm";
import NotesList from "../components/NotesList";

const NotesPage = () => {
  return (
    <div>
      <NotesForm />
      <NotesList />
    </div>
  );
};

export default NotesPage;
