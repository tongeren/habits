import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

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

