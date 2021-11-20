import { Grid, Typography } from "@mui/material"

const Navbar = () => {
    return (
        <Grid container xs={12}>
            <Grid item xs={2}>
                {'<'}
            </Grid>
            <Grid item xs={8}>
                <Typography>
                    Task
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography>
                    {'>'}
                </Typography>

            </Grid>
        </Grid>
    )
}

export default Navbar