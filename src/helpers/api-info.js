import { showNotification } from './notifications';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const handleApiRequest = async (
    dispatch,
    notif, // Of the form { pending, success }
    requestInfo, // Of the form { url, method, headers, body }
    statusHandler // Of the form (res, success, dispatch) => { }
) => {
    const { pending, success } = notif;
    showNotification(dispatch, pending);
        
    const { url, method, headers, body } = requestInfo;
    const sendRequest = async () => { 
        const res = await fetch(url, { method, headers, body });
        statusHandler(res, success, dispatch);
    };

    try {
        await sendRequest();
    } catch (error) {
        showNotification(dispatch, {
            status: 'error',
            title: 'Error',
            message: error.message
        });
    }
};

const SIGNUP_ENDPOINT = 'user/signup';
const SIGNUP_URL = SERVER_URL + SIGNUP_ENDPOINT;

export const SIGNUP_INFO = {
    url: SIGNUP_URL,
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    }
};

const LOGIN_ENDPOINT = 'user/login';
const LOGIN_URL = SERVER_URL + LOGIN_ENDPOINT;

export const LOGIN_INFO = {
    url: LOGIN_URL,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

const CARVER_ATTRIBUTES_ENDPOINT = 'carver/target/attributes';
export const CARVER_ATTRIBUTES_URL = SERVER_URL + CARVER_ATTRIBUTES_ENDPOINT;





