import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const HCarverTargetFormWrapper = ({ targetsSubmitHandler, children }) => (
    <Box 
        component="form" 
        noValidate 
        onSubmit={ targetsSubmitHandler } 
        sx={{ mt: 3 }}
    >
        <Grid container spacing={2}>
            { children }
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Next
        </Button>
    </Box>
);

export default HCarverTargetFormWrapper;