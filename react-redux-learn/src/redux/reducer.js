import { INCREAMENT, DECREAMENT } from "./actionTypes";

const initialState = {
    count: 0,
};

const counterReducer = (state  = initialState, action) => {
    switch(action.type) {
        case INCREAMENT:
            return {
                ...state,
                count: state.count +1,
            };
        case DECREAMENT:
            return {
                ...state,
                count: state.count -1,
            };
        default:
            return state;
    }
};

export default counterReducer;