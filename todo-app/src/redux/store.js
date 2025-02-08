import noteReducer from "./reducers/notesReducers";
import todoReducer from "./reducers/todoReducers.js"
// import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//     todo: todoReducer,
//     note: noteReducer
// })

// const store = createStore(rootReducer);
// export default store;
const store = configureStore({
    reducer: {
        todo: todoReducer,
        note: noteReducer
    }
});

export default store;