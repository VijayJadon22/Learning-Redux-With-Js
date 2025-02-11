// Define the loggerMiddleware function
// The middleware is a higher-order function that takes the Redux store as an argument
const loggerMiddleware = (store) => (next) => (action) => {
    // Log the action being dispatched
    console.log('Dispatching action:', action);

    // Call the next middleware in the chain or the reducer if there are no more middlewares
    let result = next(action);

    // Log the state of the store after the action has been processed
    console.log('Next state:', store.getState());

    // Return the result of the next middleware or the reducer
    return result;
};

// Export the loggerMiddleware function as the default export of the module
export default loggerMiddleware;
