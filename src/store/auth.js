import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: false,
    showLogIn: false,
    showSignUp: false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
        showLogIn(state) {
            state.showLogIn = true;
            state.showSignUp = false;
        },
        hideLogIn(state) {
            state.showLogIn = false;
        },
        showSignUp(state) {
            state.showSignUp = true;
            state.showLogIn = false;
        },
        hideSignUp(state) {
            state.showSignUp = false;
        },
        reset(state) {
            state = initialAuthState;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;