import './App.css';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import NotesPage from './pages/NotesPage';
import TodoPage from './pages/TodoPage';

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const createTodo = (text) => {
    setTodos(state => {
      return [
        ...state,
        {
          text: text,
          id: state.length + 1,
          completed: false
        }
      ]
    })
  };

  const toggleTodo = (index) => {
    // const allTodos = [...todos];
    // allTodos[index] = {
    //   ...allTodos[index],
    //   completed: !allTodos[index].completed
    // }
    // setTodos(allTodos);

    setTodos(state =>
      state.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<NotesPage />} />
          <Route path='/todo' element={<TodoPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
