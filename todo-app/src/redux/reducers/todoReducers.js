import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state with an empty todos array, and loading and error states
const initialState = {
    todos: [],
    loading: false,
    error: null
}

// Create the async thunk for fetching todos
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (args, thunkAPI) => {
    const response = await fetch("http://localhost:4100/get/todos");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // thunkAPI.dispatch(setTodos(data));
    return data;


})

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
        },

        // Commented out setTodos reducer as it's not being used
        // setTodos: (state, action) => {
        //     state.todos = action.payload;
        // }
    },

    // Handle asynchronous actions
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.loading = true; // Set loading to true when the fetch is pending
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload; // Update todos with the fetched data
                state.loading = false; // Set loading to false after the fetch is complete
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false; // Set loading to false after the fetch fails
                state.error = true; // Set error message if the fetch fails
            })
    }
});

// Export the actions to be used in the application
export const { add, toggle, setTodos } = todoSlice.actions;
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