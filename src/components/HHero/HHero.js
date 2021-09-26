import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const HHero = props => {
    const { imgSrc, imgAlt, title, subtitle, ctaButtonClickHandler } = props;

    return (
        <Grid
            data-testid="HHero"
            component="section"
            container
            sx={{
                position: `relative`,
                height: "100vh",
                width: `100vw`,
                overflow: `hidden`,
                mb: 15,
            }}
            >
                <CardMedia
                    component="img"
                    alt={ imgAlt }
                    image={ imgSrc }
                />
                <Grid
                    container
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0, .2)",
                    }}
                >
                    <Grid
                        container
                        item
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography
                            variant="h1"
                            align="center"
                            sx={{
                                color: "secondary.main",
                                fontWeight: 400,
                            }}
                        >
                            { title.toUpperCase() }
                        </Typography>
                        <Typography
                            component="p"
                            variant="h2"
                            align="center"
                            color="common.white"
                            sx={{
                                mb: 10,
                            }}
                        >
                            { subtitle } 
                        </Typography>
                        <Button 
                            variant="contained"
                            onClick={ ctaButtonClickHandler }
                        >
                            Start now!
                        </Button>
                    </Grid>
                </Grid>
        </Grid>
    );
};

export default HHero;

