import { ADD_NOTE, DELETE_NOTE } from "../actions/notesActions";

const initialState = {
    notes: []
}

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    { text: action.text }
                ]
            }

        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note, i) => i !== action.index)
            }

        default:
            return state;
    }
}