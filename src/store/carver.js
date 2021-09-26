import { createSlice } from '@reduxjs/toolkit';
import { authActions } from './auth';
import { uiActions } from './ui';

const carverSlice = createSlice({
    name: 'carver',
    reducers: {
        
    }
});

export const carverActions = carverSlice.actions;
export default carverSlice.reducer;