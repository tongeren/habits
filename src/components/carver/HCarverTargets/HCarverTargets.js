import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import capitalize from '../../../helpers/capitalize';
import digitToWord from '../../../helpers/digitToWord';

const HCarverTargets = () => (
    <Grid
        data-testid="HCarverTargets" 
        container 
        spacing={2}
    >
        { [1, 2, 3, 4, 5].map(i => {
            const word = digitToWord(i);
            const capWord = capitalize(word);
            const identifier = "target-" + word;
            return (
                <Grid
                    key={ i } 
                    item xs={12}
                >
                    <TextField
                        required
                        fullWidth
                        data-testid={ identifier }
                        id={ identifier }
                        label={ "Target " + capWord }
                        name={ identifier }
                    />
                </Grid>
            );   
        })}
    </Grid>
);

export default HCarverTargets;

