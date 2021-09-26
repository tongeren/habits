import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import PersonAdd from '@mui/icons-material/PersonAdd';
import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';

const HAuthMenuItemsWrapper = ({ 
    isAuthenticated, 
    logoutHandler,
    signupHandler,
    loginHandler,
    children 
}) => {
    let items;
    if (isAuthenticated) {
        items = [
            <MenuItem key={1}>
            <Avatar /> My account
            </MenuItem>
        ].concat(children).concat(
            <Divider key={3} />,
            <MenuItem key={4} onClick={ logoutHandler }>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        ); 
    } else {
        items = [
            <MenuItem key={1} onClick={ signupHandler }>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Signup
            </MenuItem>,
            <MenuItem key={2} onClick={ loginHandler }>
                <ListItemIcon>
                    <Login fontSize="small" />
                </ListItemIcon>
                Login
            </MenuItem>
        ];
    } 
    return items;
};

export default HAuthMenuItemsWrapper;

