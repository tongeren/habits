import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { SIGNUP_URL } from '../../helpers/api-info';
import { 
    ERR_MSG_EMAIL_EXISTS_ALREADY, 
    ERR_MSG_USER_CREATION_FAILED 
} from '../../helpers/error-messages';

// import isEmail from 'validator/es/lib/isEmail';
// import useInput from '../../hooks/use-input';

const HSignUp = () => {
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(authActions.showLogIn());
    };

    const signupHandler = event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        fetch(SIGNUP_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                carverMatrices: [] 
            })
        })
        .then(res => {
            if (res.status === 422) {
                throw new Error(ERR_MSG_EMAIL_EXISTS_ALREADY);
            }
            if (res.status === 201) {
                return res.json();
            } else {
                throw new Error(ERR_MSG_USER_CREATION_FAILED);
            }
        })
        .then(resData => {
            console.log(resData);
            // User has succesfully signed up, so let him log in now
            dispatch(authActions.showLogIn());
        })
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
                <Box component="form" noValidate onSubmit={ signupHandler } sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
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