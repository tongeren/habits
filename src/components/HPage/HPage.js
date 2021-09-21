import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import HHeroPage from '../HHeroPage/HHeroPage';
import HLogIn from '../HLogIn/HLogIn';
import HSignUp from '../HSignUp/HSignUp';
import HWelcome from '../HWelcome/HWelcome';

const ContainerWrap = ({ children }) => (
    <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
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

