import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import HCarverMatrix from '../carver/HCarverMatrix/HCarverMatrix';
import HCarverTargetForm from '../carver/HCarverTargetForm/HCarverTargetForm';
import HStepper from '../HStepper/HStepper';

import greeting from '../../helpers/greeting';

const HWelcome = () => {
    return (
        <Grid
            data-testid="HWelcome"
            container
            item
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Typography>
                { greeting() }
            </Typography>
            {/* <HCarverMatrix /> */}
            <HCarverTargetForm />
            {/* <HStepper /> */}
        </Grid>
    );
};

export default HWelcome;