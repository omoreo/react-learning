export const INCREAMENT = "INCREAMENT"
export const DECREAMENT = "DECREAMENT"

export const SET_COUNT = "SET_COUNT"

export const increament = () => ({
    type: INCREAMENT,
});

export const decreament = () => ({
    type: DECREAMENT,
});

export const setCount = (count) => ({
    type: SET_COUNT,
    payload: count,
});