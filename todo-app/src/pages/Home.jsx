import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import NotesForm from "../components/NotesForm";
import NotesList from "../components/NotesList";

const Home = () => {
  return (
    <div style={{display:"flex", width:"100%", padding:"50px"}}>
      <div style={{width:"50%"}}>
        <TodoForm />
        <TodoList />
      </div>
      <div style={{width:"50%"}}>
        <NotesForm />
        <NotesList />
      </div>
    </div>
  );
};

export default Home;
