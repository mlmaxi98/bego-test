import { Box, Grid, Typography, IconButton } from "@mui/material"
import { Back, Notification } from '../icons'
const Navbar = () => {
    return (
        <Box sx={{
            width: '100%',
            pt: 5,
        }}>
            <Grid
                container
                xs={12}
                direction="row"
                justifyContent="space-between"
            >
                <Grid
                    item xs={2}
                    sx={{ display: 'flex' }}
                    alignItems="center"
                    justifyContent="center">
                    <IconButton color="primary">
                        <img src={Back} />
                    </IconButton>
                </Grid>
                <Grid
                    item xs={8}
                    sx={{ display: 'flex' }}
                    alignItems="center"
                    justifyContent="center">
                    <Typography alignText="center" sx={{
                        fontSize: '18px',
                        fontWeight: 900,
                        letterSpacing: 0,
                        lineHeight: '26px',
                    }}>
                        Tasks
                    </Typography>
                </Grid>
                <Grid
                    item xs={2}
                    sx={{ display: 'flex' }}
                    alignItems="center"
                    justifyContent="center">
                    <IconButton color="secondary">
                        <img src={Notification} />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Navbar