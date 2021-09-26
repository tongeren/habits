import { useDispatch } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { authActions, signupUser } from '../../store/auth';
import useInput from '../../hooks/use-input';

import { 
    isValidEmail, 
    isStrongEnoughPassword,
    PasswordRequirements
} from '../../helpers/input-requirements';

const HSignUp = () => {
    const { 
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailInputChangeHandler,
        valueBlurHandler: emailInputBlurHandler,
        reset: resetEmailInput
    } = useInput(isValidEmail);

    const { 
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordInputChangeHandler,
        valueBlurHandler: passwordInputBlurHandler,
        reset: resetPasswordInput
    } = useInput(isStrongEnoughPassword);

    let formIsValid = false;

    if (!emailInputHasError && !passwordInputHasError) formIsValid = true;

    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(authActions.showLogIn());
    };

    const signupHandler = event => {
        event.preventDefault();

        if (!enteredEmailIsValid || !enteredPasswordIsValid) return;

        const email = enteredEmail;
        const password = enteredPassword;

        signupUser(email, password)(dispatch);

        // Reset input fields
        resetEmailInput();
        resetPasswordInput();

        // User has succesfully signed up, so let him log in now
        dispatch(authActions.showLogIn());
    };

    return (
        <Container 
            data-testid="HSignUp"
            component="main" 
            maxWidth="xs"
        >
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box 
                    component="form" 
                    noValidate 
                    onSubmit={ signupHandler } 
                    sx={{ mt: 3 }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={ enteredEmail }
                                error={ emailInputHasError }
                                onChange={ emailInputChangeHandler }
                                onBlur={ emailInputBlurHandler }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Tooltip
                                disableFocusListener 
                                open={ passwordInputHasError } 
                                title={ <PasswordRequirements/> }
                            >
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={ enteredPassword }
                                    error={ passwordInputHasError }
                                    onChange={ passwordInputChangeHandler }
                                    onBlur={ passwordInputBlurHandler }
                                />
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Button 
                        type="submit" 
                        fullWidth 
                        variant="contained" 
                        sx={{ mt: 3, mb: 2 }}
                        disabled={ !formIsValid }
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Button component={ Link } onClick={ loginHandler }>
                                Already have an account? Log in!
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default HSignUp;