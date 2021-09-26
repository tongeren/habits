import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

import { CARVER_ATTRIBUTES_URL } from '../../helpers/api-info';
import { 
    ERR_MSG_DATABASE_ERROR, 
    ERR_MSG_UNKNOWN_ERROR 
} from '../../helpers/error-messages';

const steps = fetch(CARVER_ATTRIBUTES_URL, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(res => {
        if (res.status === 500) {
            throw new Error(ERR_MSG_DATABASE_ERROR);
        }
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error(ERR_MSG_UNKNOWN_ERROR);
        }
    })
    .then(resData => resData.map(attr => (
        {  
            label: attr.name,
            description: attr.description
        }
    )))


const HStepper = () => {
    const [activeStep, setActiveStep] = useState(0);

    const nextHandler = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const backHandler = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const resetHandler = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={ activeStep } orientation="vertical">
                { steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            { step.label }
                        </StepLabel>
                        <StepContent>
                            <Typography>{ step.description }</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={ nextHandler }
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        { index === steps.length - 1 ? 'Finish' : 'Continue' }
                                    </Button>
                                    <Button
                                        disabled={ index === 0 }
                                        onClick={ backHandler }
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            { activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={ resetHandler } sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
}

export default HStepper;


