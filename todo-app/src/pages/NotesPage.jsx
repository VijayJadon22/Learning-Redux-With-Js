import React from "react";
import NotesForm from "../components/NotesForm";
import NotesList from "../components/NotesList";
import { Link } from "react-router-dom";

const NotesPage = () => {
  return (
    <div>
      <NotesForm />
      <NotesList />
      <Link to={"/"}>
        <button style={{ marginTop: "40px" }}>Go To Home</button>
      </Link>
    </div>
  );
};

export default NotesPage;
