import { Box, Grid, Typography, IconButton, Button } from "@mui/material"
import { Back, Notification } from '../icons'
const Navbar = () => {
    return (
        <Box sx={{
            width: '100%',
            pt: 10,
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
                        <img src={Back} alt='back' />
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
                        <img src={Notification} alt='notification' />
                    </IconButton>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '43px' }}>
                <Button color='primary' sx={{
                    fontSize: '1rem',
                    lineHeight: '21px',
                    letterSpacing: 0,
                    fontWeight: 900,
                }}>CREATE +</Button>
            </Box>
        </Box>
    )
}

export default Navbar