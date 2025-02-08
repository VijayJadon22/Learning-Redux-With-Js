// import { ADD_NOTE, DELETE_NOTE } from "../actions/notesActions";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state 
const initialState = {
    notes: [{ text: "my first note" }]
}

// Create a slice of the store for notes
const noteSlice = createSlice({
    name: "Note",
    initialState: initialState,
    reducers: {
        // Reducer to add a new note to the notes array
        add: (state, action) => {
            state.notes.push({ text: action.payload })
        },
        // Reducer to delete a note from the notes array based on index
        deleteNote: (state, action) => {
            state.notes = state.notes.filter((note, i) => i !== action.payload)
        }
    }
});

// Export the actions to be used in the application
export const { add, deleteNote } = noteSlice.actions;
// Export the reducer to be included in the store
export default noteSlice.reducer;



// export const noteReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes: [
//                     ...state.notes,
//                     { text: action.text }
//                 ]
//             }

//         case DELETE_NOTE:
//             return {
//                 ...state,
//                 notes: state.notes.filter((note, i) => i !== action.index)
//             }

//         default:
//             return state;
//     }
// }