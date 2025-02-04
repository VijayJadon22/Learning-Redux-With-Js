// actions
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action creation
const addTodo = (text) => ({ text, type: ADD_TODO });
const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });

// Inital State
const intialState = {
    todos: []
}

//reducers
const todoApp = (state = intialState, Action) => {
    switch (Action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: Action.text, completed: false }]
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (i === Action.index) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}


//create store
const redux = require("redux");

const store = redux.createStore(todoApp);

//dispatch actions
store.dispatch(addTodo("Complete Js Notes"));
store.dispatch(addTodo("Go to gym"));

store.dispatch(toggleTodo(1));

//get the current state
console.log(store.getState());