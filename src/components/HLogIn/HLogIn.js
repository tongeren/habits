import { useDispatch } from 'react-redux';
import { authActions, loginUser } from '../../store/auth';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const HLogIn = () => {
    const dispatch = useDispatch();

    const loginHandler = event => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        
        loginUser(email, password)(dispatch);

        // Succesfully authenticated, so now authorize a log in
        dispatch(authActions.login());
        dispatch(authActions.hideLogIn());
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