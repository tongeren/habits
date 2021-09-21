import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT':
            return { value: action.value, isTouched: state.isTouched };
        case 'BLUR':
            return { value: state.value, isTouched: true };
        case 'RESET':
            return { value: '', isTouched: false };
        default:
            throw new Error('We should never reach here!');
    };
};

const useInput = (validator) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
    
    const valueIsValid = validator(inputState.value);
    const hasError =  !valueIsValid && inputState.isTouched; 

    const valueChangeHandler = event => {
        dispatch({type: 'INPUT', value: event.target.value });
    };
    
    const valueBlurHandler = event => {
        dispatch({type: 'BLUR'});
    };

    const reset = () => {
       dispatch({type: 'RESET'});
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    };
};

export default useInput;