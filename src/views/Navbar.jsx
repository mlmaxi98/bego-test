import { Box, Grid, Typography, IconButton, Button, useTheme } from "@mui/material"
import { Back, Notification } from '../icons'
const Navbar = () => {
    const { typography } = useTheme()
    return (
        <Box sx={{
            width: '100%',
            pt: 10,
        }}>
            <Grid
                container
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
                    <Typography variant="tabGraph">
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
                    ...typography.graphs
                }}>CREATE +</Button>
            </Box>
        </Box>
    )
}

export default Navbar