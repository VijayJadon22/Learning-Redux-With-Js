import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';

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
    <div className="App">
      <TodoForm createTodo={createTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
