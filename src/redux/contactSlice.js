import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// get contacts from api
export const getContacts = createAsyncThunk('contact/getContacts', async () => {
    try {
        const response = await axios.get("https://tester.crs-consulting.com/api/entries")
        return response.data;
    } catch (error) {
        return error.message
    }
})
// delete contact from api using its id param
export const deleteContacts = createAsyncThunk(
    'contact/deleteContacts',
    async ({ id }) => {
        try {
            return await fetch(`https://tester.crs-consulting.com/api/entry?id=${id}`, { method: 'DELETE' }).then(res => res.json());
        } catch (error) {
            return error.message;
        }
    }
)

// create new contact and make post to api

export const addNewContacts = createAsyncThunk('contact/newContacts', async (contact) => {
    try {
        const res = await axios.post("https://tester.crs-consulting.com/api/entry", contact);
        return res.data;
    } catch (error) {
        return error.message;
    }
})


export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        data: [],
        status: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getContacts.pending]: (state) => {
            state.status = false;
        },
        [getContacts.fulfilled]: (state, action) => {
            state.status = true;
            state.data = action.payload;
        },
        [getContacts.rejected]: (state, action) => {
            state.status = false;
            state.error = 'error occured'
        },
        [deleteContacts.pending]: (state) => {
            state.status = false;
        },
        [deleteContacts.fulfilled]: (state, action) => {
            state.status = true;
            state.data = action.payload;
        },
        [deleteContacts.rejected]: (state, action) => {
            state.status = false;
            state.error = 'error occured'
        },
        [addNewContacts.pending]: (state) => {
            state.status = false;
        },
        [addNewContacts.fulfilled]: (state, action) => {
            state.status = true;
            state.data = action.payload;
        },
        [addNewContacts.rejected]: (state, action) => {
            state.status = false;
            state.error = 'error occured'
        },
    },
});
export const { removeItem } = contactSlice.actions;
export default contactSlice.reducer;