import axios from "axios"

export const ActionTypes = {
    FETCH_USERS: 'FETCH_USERS',
    FETCH_USER: 'FETCH_USER',
    CREATE_USER: 'CREATE_USER',
    EDIT_USER: 'EDIT_USER',
    DELETE_USER: 'DELETE_USER',
}

const APIUrl = 'https://665b5d1d003609eda460af0e.mockapi.io/Schema';

export const fetchUsers = () => async (dispatch) => {
    try {
        const response = await axios.get(`${APIUrl}`)
        dispatch({
            type: ActionTypes.FETCH_USERS,
            payload: response.data,
        })
    } catch (error) {
        dispatch({
            type: ActionTypes.FETCH_USERS_ERROR 
        })
    }
}

export const fetchUser = (userId) => async (dispatch) => {
    const response = await axios.get(`${APIUrl}/${userId}`)
    dispatch({ 
        type: ActionTypes.FETCH_USER, 
        payload: response.data
    })
}

export const createUser = (user) => async (dispatch) => {
    try {
        const response = await axios.post(APIUrl, user)
        dispatch({ 
            type: ActionTypes.CREATE_USER, 
            payload: response.data
        })
        return { success: true}
    } catch (error) {
        return { success: false, message: error.message }
    }
}

export const editUser = (user) => async (dispatch) => {
    try {
        const response = await axios.put(`${APIUrl}/${user.id}`, user)
        dispatch({ 
            type: ActionTypes.EDIT_USER, 
            payload: response.data
        })
        return { success: true }
    } catch (error) {
        return { success: false, message: error.message }
    }
}

export const deleteUser = (userId) => async (dispatch) => {
    await axios.delete(`${APIUrl}/${userId}`)
    dispatch({ 
        type: ActionTypes.DELETE_USER, 
        payload: userId 
    })
}