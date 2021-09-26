import { createSlice } from '@reduxjs/toolkit';

import { 
    handleApiRequest,
    SIGNUP_INFO,
    LOGIN_INFO
} from '../helpers/api-info';

import { 
    ERR_MSG_EMAIL_EXISTS_ALREADY, 
    ERR_MSG_USER_CREATION_FAILED,
    ERR_MSG_VALIDATION_FAILED,
    ERR_MSG_AUTHENTICATION_FAILED 
} from '../helpers/error-messages';

import { 
    showNotification,
    NOTIF_SIGNUP,
    NOTIF_LOGIN
} from '../helpers/notifications';

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
        reset() {
            return initialAuthState;
        }
    }
});

const authActions = authSlice.actions;
export { authActions };

export const signupUser = (email, password) => {
    const statusHandler = (res, success, dispatch) => {
        switch(res.status) {
            case 422:
                throw new Error(ERR_MSG_EMAIL_EXISTS_ALREADY);
            case 201:
                showNotification(dispatch, success);
                break;
            default:
                throw new Error(ERR_MSG_USER_CREATION_FAILED);
        }
    };

    return async dispatch => {
        const body = JSON.stringify({
            email: email,
            password: password,
            carverMatrices: [] 
        });

        await handleApiRequest(
            dispatch,
            NOTIF_SIGNUP,
            { ...SIGNUP_INFO, body: body },
            statusHandler
        );
    };
};

export const loginUser = (email, password) => {
    const statusHandler = (res, success, dispatch) => {
        switch (res.status) {
            case 422:
                throw new Error(ERR_MSG_VALIDATION_FAILED);
            case 200:
                showNotification(dispatch, success);

                const resData = res.json();

                localStorage.setItem('token', resData.token);
                localStorage.setItem('userId', resData.userId);

                const remainingMilliseconds = 60 * 60 * 1000;
                const expiryDate = new Date(
                    new Date().getTime() + remainingMilliseconds
                );

                localStorage.setItem('expiryDate', expiryDate.toISOString());

                break;
            default:
                throw new Error(ERR_MSG_AUTHENTICATION_FAILED);
        }
    };

    return async dispatch => {
        const body = JSON.stringify({
            email: email,
            password: password
        })

        await handleApiRequest(
            dispatch,
            NOTIF_LOGIN,
            { ...LOGIN_INFO, body: body },
            statusHandler
        );
    };
};


export default authSlice.reducer;