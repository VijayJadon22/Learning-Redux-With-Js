import { createSlice } from "@reduxjs/toolkit";
import { add as addNote } from "./notesReducers";
import { add as addTodo } from "./todoReducers";

const initialState = {
    notification: ""
}

const notificationSlice = createSlice({
    name: "Notifcation",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addTodo, (state, action) => {
                state.notification = `Todo added: ${action.payload}`;
            })
            .addCase(addNote, (state, action) => {
                state.notification = `Note added: ${action.payload}`;
            })
    }
})


export default notificationSlice.reducer;