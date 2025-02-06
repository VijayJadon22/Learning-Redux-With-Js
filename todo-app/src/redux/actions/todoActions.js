
//Describe Actions
export const ADD_TODO = "ADD TODO";
export const TOGGLE_TODO = "TOGGLE TODO";

//Create Actions
const addTodo = (text) => ({ text, type: ADD_TODO });
const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });

export { addTodo, toggleTodo };