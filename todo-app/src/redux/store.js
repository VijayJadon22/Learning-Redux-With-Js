import noteReducer from "./reducers/notesReducers"; // Import the noteReducer from notesReducers file
import todoReducer from "./reducers/todoReducers.js"; // Import the todoReducer from todoReducers file
// import { combineReducers, createStore } from "redux"; // (Commented out) Import combineReducers and createStore from Redux if needed
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from Redux Toolkit
import notificationReducer from "./reducers/notificationReducers.js"; // Import the notificationReducer from notificationReducers file
import loggerMiddleware from "./middlewares/loggerMiddleware.js"; // Import the custom loggerMiddleware

// (Commented out) Example of combining reducers using combineReducers and creating a store with createStore
// const rootReducer = combineReducers({
//     todo: todoReducer,
//     note: noteReducer
// })

// const store = createStore(rootReducer);
// export default store;

// Create the Redux store using configureStore from Redux Toolkit
const store = configureStore({
    reducer: {
        todo: todoReducer, // Add the todoReducer to the store
        note: noteReducer, // Add the noteReducer to the store
        notification: notificationReducer // Add the notificationReducer to the store
    },
    // Add custom middleware to the store
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
    // getDefaultMiddleware() returns an array of default middlewares, and .concat(loggerMiddleware) adds the custom loggerMiddleware to the array
});

export default store; // Export the configured store as the default export
