import { Box, Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material/';
import Graphic from '../components/graphic';
import Navbar from '../components/navbar';

const Home = () => {
    const timeLapse = [
        { name: 'Day' },
        { name: 'Week' },
        { name: 'Month' },
        { name: 'Year' },
    ]
    const months = ["", "Jan", "", "Jul", "", "Aug", "", "Sep", "", "Oct", "", "Nov", "",]


    return (
        <Box component='section'
            sx={{
                minHeight: '100vh',
                backgroundColor: '#040B11',
            }}>
            <Container maxWidth='xs'
            >
                <Navbar />
                <Box sx={{ backgroundColor: '#1C232A' }}>

                    {
                        timeLapse.map(time => {
                            return (
                                <Button key={time.name}>
                                    {time.name}
                                </Button>
                            )
                        })
                    }
                    <Grid
                        container
                        justifyContent="center"
                    >
                        <Grid item xs>
                            <Typography textAlign="center" variant="h3">
                                $13,543
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Graphic />
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="space-between"
                            sx={{ marginTop: '-2.5rem' }}
                        >
                            {
                                months.map(month => {
                                    return (
                                        <Grid
                                            key={month}
                                            item
                                            justifyContent="center">

                                            <Typography lignText="center">
                                                {month}
                                            </Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </Box >
    )

}

export default Home