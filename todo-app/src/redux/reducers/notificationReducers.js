import { createSlice } from "@reduxjs/toolkit";
import { add as addNote } from "./notesReducers"; // Import the add action from notesReducers and alias it as addNote
import { add as addTodo } from "./todoReducers"; // Import the add action from todoReducers and alias it as addTodo

// Define the initial state with a notification string
const initialState = {
    notification: ""
}

// Create a slice of the store for notifications
const notificationSlice = createSlice({
    name: "Notification", // Name of the slice
    initialState, // Initial state for notifications
    reducers: {
        // Reducer to clear the notification message
        clearNotification: (state) => {
            state.notification = "";
        }
    },
    // Handle actions from other slices using extraReducers
    extraReducers: (builder) => {
        builder
            .addCase(addTodo, (state, action) => {
                // Update the notification state when a todo is added
                state.notification = `Todo added: ${action.payload}`;
            })
            .addCase(addNote, (state, action) => {
                // Update the notification state when a note is added
                state.notification = `Note added: ${action.payload}`;
            })
    }
})

// Export the action to clear notifications
export const { clearNotification } = notificationSlice.actions;
// Export the reducer to be included in the store
export default notificationSlice.reducer;
