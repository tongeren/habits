import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

import PersonAdd from '@material-ui/icons/PersonAdd';
import Login from '@material-ui/icons/Login';
import Logout from '@material-ui/icons/Logout';

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

