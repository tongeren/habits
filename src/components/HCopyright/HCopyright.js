import Typography from '@mui/material/Typography';

const HCopyright = () => {
    return (
        <Typography variant="body2" color="white" align="center" sx={{ fontWeight: 'bold' }}>
            { `Copyright © Habits ${new Date().getFullYear()}`}
        </Typography>
    );
};

export default HCopyright;