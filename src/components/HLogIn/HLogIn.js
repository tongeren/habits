import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const ERROR_VALIDATION_FAILED = 'Validation error!';
const ERROR_AUTHENTICATION_FAILED = 'Could not authenticate you.';

const LOGIN_ENDPOINT = 'user/login';
const LOGIN_URL = process.env.REACT_APP_SERVER_URL + LOGIN_ENDPOINT;

const HLogIn = () => {
    const dispatch = useDispatch();

    const loginHandler = event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');    
        console.log('HLogIn', email, password);   
        fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => {
            if (res.status === 422) {
                throw new Error(ERROR_VALIDATION_FAILED);
            }
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(ERROR_AUTHENTICATION_FAILED);
            }
        })
        .then(resData => {
            console.log(resData);
            // Succesfully authenticated, so now authorize a log in
            dispatch(authActions.login());
            dispatch(authActions.hideLogIn());
            // this.setState({
            //      isAuth: true,
            //      token: resData.token,
            //      authLoading: false,
            //      userId: resData.userId
            // });
            localStorage.setItem('token', resData.token);
            localStorage.setItem('userId', resData.userId);
            const remainingMilliseconds = 60 * 60 * 1000;
            const expiryDate = new Date(
                new Date().getTime() + remainingMilliseconds
            );
            localStorage.setItem('expiryDate', expiryDate.toISOString());
            // this.setAutoLogout(remainingMilliseconds);
        })
        .catch(err => {
            console.log(err);
            // this.setState({
            //     isAuth: false,
            //     authLoading: false,
            //     error: err
            // });
        });
    };

    const signupHandler = () => {
        dispatch(authActions.showSignUp());
    };

    return (
        <Container 
            data-testid="HLogIn"
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
                    Log in
                </Typography>
                <Box component="form" onSubmit={ loginHandler } noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Log In
                </Button>
                <Grid container>
                    <Grid item>
                        <Button component={ Link }>
                            Forgot password?
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button component={ Link } onClick={ signupHandler }>
                            Don't have an account? Sign up!
                        </Button>
                    </Grid>
                </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default HLogIn;