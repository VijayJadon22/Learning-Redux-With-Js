import { noteReducer } from "./reducers/notesReducers";
import { todoReducer } from "./reducers/todoReducers";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    todo: todoReducer,
    notes: noteReducer
})


const store = createStore(rootReducer);
export default store;