import { DECREAMENT, INCREAMENT, SET_COUNT } from "../actions/counterActions";

const initialState = {
    count: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREAMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREAMENT:
            return {
                ...state,
                count: state.count -1,
            };
        case SET_COUNT:
            return {
                ...state,
                count: action.payload,
            };
        default:
            return state;
    }
};

export default counterReducer;