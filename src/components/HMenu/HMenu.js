import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import HAuthMenuItems from '../HAuthMenuItems/HAuthMenuItems';
import HAuthMenuItemsWrapper from '../HAuthMenuItemsWrapper/HAuthMenuItemsWrapper';
import HMenuLayout from '../HMenuLayout/HMenuLayout';

const HMenu = props => {
    const { open, anchorElement, closeHandler } = props;
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
        dispatch(authActions.logout());
    };

    const loginHandler = () => {
        dispatch(authActions.showLogIn());
    };

    const signupHandler = () => {
        dispatch(authActions.showSignUp());
    };

    const createCarverMatrixHandler = () => {
        // TO DO
    };

    const createPlanHandler = () => {
        // TO DO
    };

    return ( 
        <HMenuLayout
            anchorElement={ anchorElement }
            open={ open }
            closeHandler={ closeHandler }
            clickHandler={ closeHandler }
        >
            <HAuthMenuItemsWrapper
                isAuthenticated={ isAuthenticated }
                logoutHandler={ logoutHandler }
                signupHandler={ signupHandler }
                loginHandler={ loginHandler }
            >           
                <HAuthMenuItems 
                    createCarverMatrixHandler={ createCarverMatrixHandler }
                    createPlanHandler={ createPlanHandler }
                />
            </HAuthMenuItemsWrapper>
        </HMenuLayout>
    );
};

export default HMenu;


