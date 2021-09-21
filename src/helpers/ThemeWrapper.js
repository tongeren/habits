import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../theme';

const ThemeWrapper = ({ children }) => (    
    <ThemeProvider theme={ theme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
);

export default ThemeWrapper;