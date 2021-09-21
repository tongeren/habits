import { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { styled } from '@material-ui/core/styles';

import HMenu from '../HMenu/HMenu';

const PREFIX = 'HAppBar';
const classes = {
    root: `${PREFIX}-root`
};

const ImgContainer = styled('div')(({
    [`&.${classes.root}`]: {
        maxWidth: 60,
        maxHeight: 60,
    },
    [`&.${classes.media}`]: {
        maxHeight: '100%',
        maxWidth: '100%',
    },
}));

const IconWrapper = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    right: 10,
    top: 10,
    color: 'white',
    marginRight: 0,
    width: 'auto',
}));

const HAppBar = () => {
    const [anchorElement, setAnchorElement] = useState(null);
    const menuOpen = Boolean(anchorElement);

    const menuCloseHandler = () => {
        setAnchorElement(null);
    };

    const menuButtonClickHandler = event => {
        setAnchorElement(event.currentTarget);
    };

    return (
        <Box 
            data-testid="HAppBar" 
            sx={{ flexGrow: 1 }}
        >
            <AppBar position="static">
                <Toolbar>
                    <ImgContainer className={ classes.root }>
                        <CardMedia
                            className={ classes.media }
                            component="img"
                            alt="logo"
                            height="60"
                            image="/logo.png"
                        />
                    </ImgContainer> 
                    <IconWrapper onClick={ menuButtonClickHandler }>
                        <MenuIcon/>
                    </IconWrapper>
                </Toolbar>
            </AppBar>
            <HMenu 
                open={ menuOpen }
                anchorElement={ anchorElement }
                closeHandler={ menuCloseHandler }
            />
        </Box>
    );
};

export default HAppBar;

