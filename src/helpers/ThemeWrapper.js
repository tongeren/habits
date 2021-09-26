import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from '../theme';

const ThemeWrapper = ({ children }) => (    
    <ThemeProvider theme={ theme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
);

export default ThemeWrapper;