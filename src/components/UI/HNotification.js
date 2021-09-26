import { useSelector } from 'react-redux';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const HNotification = () => {
    const notification = useSelector(state => state.ui.notification);
    
    if (notification) {
        const { status, title, message } = notification;

        return (
            <Alert severity={ status } sx={{ width: 'auto' }}> 
                <AlertTitle>{ title }</AlertTitle>
                { message }
            </Alert>
        );
    } else {
        return null;
    }
};

export default HNotification;