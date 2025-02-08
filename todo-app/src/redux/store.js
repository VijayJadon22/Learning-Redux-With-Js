import { noteReducer } from "./reducers/notesReducers";
import { todoReducer } from "./reducers/todoReducers"
// import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//     todo: todoReducer,
//     note: noteReducer
// })

// const store = createStore(rootReducer);
// export default store;

export const store = configureStore({
    reducer: {
        tood: todoReducer,
        note: noteReducer
    }
})