import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import HHeroPage from '../HHeroPage/HHeroPage';
import HLogIn from '../HLogIn/HLogIn';
import HSignUp from '../HSignUp/HSignUp';
import HWelcome from '../HWelcome/HWelcome';

import HNotification from '../UI/HNotification';

const ContainerWrap = ({ children }) => (
    <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
            <HNotification />
            { children }
        </Box>
    </Container>
);

const HPage = ({ status }) => {
    let page;
    switch(status) {
        case 'home':
            page = ( 
                <HHeroPage key={ status }/>
            );
            break;
        case 'signup': 
            page = <HSignUp />
            break;
        case 'login':
            page = <HLogIn />
            break;
        case 'authorized': 
            page = <HWelcome/>
            break;  
        default: 
            page = <div>Unknown status encountered!</div>
    };
    page = status === 'home' ? page : <ContainerWrap key={ status }>{ page }</ContainerWrap>;
    return [ page ];
};

export default HPage;

