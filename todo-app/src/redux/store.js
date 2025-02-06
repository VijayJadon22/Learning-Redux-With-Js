import { todoReducer } from "./reducers/todoReducers";
import { createStore } from "redux";


const store = createStore(todoReducer);
export default store;