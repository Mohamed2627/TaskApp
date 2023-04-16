/* eslint-disable prettier/prettier */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
    'posts/all',
    async (_, { rejectWithValue }) => {
        try
        {
            const res = await axios.get('https://dummyjson.com/posts');
            return res.data;
        } catch (error)
        {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    posts: [],
    loading: false,
    error: false,
};


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export default postsSlice.reducer;
