import Typography from '@material-ui/core/Typography';

const HCopyright = () => {
    return (
        <Typography variant="body2" color="white" align="center" sx={{ fontWeight: 'bold' }}>
            { `Copyright © Habits ${new Date().getFullYear()}`}
        </Typography>
    );
};

export default HCopyright;