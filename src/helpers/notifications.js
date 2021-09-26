import { uiActions } from '../store/ui';

export const showNotification = (dispatch, notif) => (
    dispatch(uiActions.showNotification(notif))
);

const NOTIF_SIGNUP_PENDING = {
    status: 'info',
    title: 'Signing up...',
    message: 'Attempting to sign you up.'
};

const NOTIF_SIGNUP_SUCCESS = {
    status: 'success',
    title: 'Signed up!',
    message: 'You are successfully signed up.'
};

export const NOTIF_SIGNUP = {
    pending: NOTIF_SIGNUP_PENDING,
    success: NOTIF_SIGNUP_SUCCESS
};

const NOTIF_LOGIN_PENDING = {
    status: 'info',
    title: 'Logging in...',
    message: 'Attempting to log you in.'
};

const NOTIF_LOGIN_SUCCESS = {
    status: 'success',
    title: 'Logged in!',
    message: 'You are successfully logged in.'
};

export const NOTIF_LOGIN = {
    pending: NOTIF_LOGIN_PENDING,
    success: NOTIF_LOGIN_SUCCESS
};

