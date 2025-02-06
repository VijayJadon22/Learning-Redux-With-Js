const { ADD_TODO, TOGGLE_TODO } = require("../actions/todoActions")

const initialState = {
    todos: [
        { text: "Go to Gym", completed: false },
        { text: "Learn Redux", completed: false }
    ]
}

// Reducer function
export const todoReducer = (state = initialState, Action) => {
    switch (Action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { text: Action.text, completed: false }
                ]
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) =>
                    i === Action.index ? { ...todo, completed: !todo.completed } : todo)

            }

        default:
            return state;

    }
}