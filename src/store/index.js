import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './auth';
// import carverSliceReducer from './carver';
import uiSliceReducer from './ui';

const store = configureStore({
    reducer: { 
        auth: authSliceReducer,
        // carver: carverSliceReducer,
        ui: uiSliceReducer
    } 
});

export default store;
