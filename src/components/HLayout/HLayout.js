import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';

import HAppBar from '../HAppBar/HAppBar';
import HCopyright from '../HCopyright/HCopyright';

const PREFIX = 'HCopyright';
const classes = {
    root: `${PREFIX}-root`,
    copyright: `${PREFIX}-copyright`
};

const CopyrightContainer = styled('div')(({
  [`&.${classes.root}`]: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginBottom: '1rem'
  },
  [`&.${classes.copyright}`]: {
    textAlign: 'center',
    height: '100px',
    margin: '0 auto'
  }
}));

const HLayout = ({ children }) => (
    <Container disableGutters maxWidth={false}>
      <HAppBar />
      { children }  
      <CopyrightContainer className={ classes.root }>
        <HCopyright className={ classes.copyright }/>
      </CopyrightContainer>
    </Container>
);

export default HLayout;

