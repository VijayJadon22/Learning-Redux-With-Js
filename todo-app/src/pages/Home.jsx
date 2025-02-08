import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import NotesForm from "../components/NotesForm";
import NotesList from "../components/NotesList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", width: "100%", paddingTop: "50px" }}>
      <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
        <TodoForm />
        <TodoList />
        <Link to={"/todo"}>
          <button style={{marginTop:"40px"}}>Go To TodoPage</button>
        </Link>
      </div>
      <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
        <NotesForm />
        <NotesList />
        <Link to={"/note"}>
          <button style={{marginTop:"40px"}}>Go To NotePage</button>
        </Link>
      </div>
      
    </div>
  );
};

export default Home;
