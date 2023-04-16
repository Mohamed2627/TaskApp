/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './postsSlice';

export const store = configureStore({
    reducer: {
        posts: postsSlice,
    }
});
