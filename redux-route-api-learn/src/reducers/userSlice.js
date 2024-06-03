import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIUrl = 'https://665b5d1d003609eda460af0e.mockapi.io/Schema';

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get(APIUrl);
    return response.data;
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (userId) => {
    const response = await axios.get(`${APIUrl}/${userId}`);
    return response.data;
});

export const createUser = createAsyncThunk("users/createUser", async (user) => {
    const response = await axios.post(APIUrl, user);
    return response.data;
});

export const editUser = createAsyncThunk("users/editUser", async (user) => {
    const response = await axios.put(`${APIUrl}/${user.id}`, user);
    return response.data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (userId) => {
    await axios.delete(`${APIUrl}/${userId}`);
    return userId;
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        currentUser: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.loading = true;
                    state.error = null;
                },
            )
            .addMatcher(
                (action) => action.type.endsWith("/fulfilled"),
                (state, action) => {
                    state.loading = false;
                    if (action.type.includes("fetchUsers")) {
                        state.users = action.payload;
                    } else if (action.type.includes("fetchUser")) {
                        state.currentUser = action.payload;
                    } else if (action.type.includes("createUser")) {
                        state.users.push(action.payload);
                    } else if (action.type.includes("editUser")) {
                        const index = state.users.findIndex((user) => user.id === action.payload.id);
                        if (index !== -1) {
                            state.users[index] = action.payload;
                        }
                    } else if (action.type.includes("deleteUser")) {
                        state.users = state.users.filter((user) => user.id !== action.payload);
                    }
                },
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                },
            );
    },
});

export default userSlice.reducer;