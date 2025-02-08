// const { ADD_TODO, TOGGLE_TODO } = require("../actions/todoActions");
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state with two todo items
const initialState = {
    todos: [
        { text: "Go to Gym", completed: false },
        { text: "Learn Redux", completed: false }
    ]
}

// Create a slice of the store for todos
const todoSlice = createSlice({
    name: "Todo", // Name of the slice
    initialState: initialState, // Initial state
    reducers: {
        // Reducer to add a new todo item to the todos array
        add: (state, action) => {
            state.todos.push({ text: action.payload, completed: false });
        },
        // Reducer to toggle the completed status of a todo item based on its index
        toggle: (state, action) => {
            state.todos = state.todos.map((todo, index) => 
                index === action.payload ? { ...todo, completed: !todo.completed } : todo
            )
        }
    }
});

// Export the actions to be used in the application
export const { add, toggle } = todoSlice.actions;
// Export the reducer to be included in the store
export default todoSlice.reducer;


// Reducer function
// export const todoReducer = (state = initialState, Action) => {
//     switch (Action.type) {
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     { text: Action.text, completed: false }
//                 ]
//             }

//         case TOGGLE_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo, i) =>
//                     i === Action.index ? { ...todo, completed: !todo.completed } : todo)

//             }

//         default:
//             return state;

//     }
// }