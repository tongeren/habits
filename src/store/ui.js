import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
    notification: null // Of form { status, title, message }
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUIState,
    reducers: {
        showNotification(state, action) {
            state.notification = { ...action.payload };
        },
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;