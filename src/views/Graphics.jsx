import { Box, Grid, Typography } from '@mui/material/';
import Tabs from '../components/tabs';
import Graphic from '../components/graphic';

const Graphics = () => {
    const timeLapse = [
        { name: 'Day', value: 'day' },
        { name: 'Week', value: 'week' },
        { name: 'Month', value: 'month' },
        { name: 'Year', value: 'year' },
    ]

    const months = ["", "Jan", "", "Jul", "", "Aug", "", "Sep", "", "Oct", "", "Nov", "",]

    //const days = ["", "Mon", "", "Tue", "", "Wed", "", "Thu", "", "Fri", "", "Sat", "", "Sun", "",]

    return (
        <Box sx={{
            backgroundColor: '#10161C',
            border: '1px solid #10161C ',
            borderRadius: '1rem',
            boxShadow: 'inset 2px 2px 6px 0 #1C232A, inset -2px -2px 6px 0 #040B11',
            minHeight: '22.188rem'
        }}>

            <Grid container justifyContent="center">

                <Grid item xs sx={{ marginTop: '1.5rem' }}>
                    <Tabs
                        type="graph"
                        elements={timeLapse}
                        initial={timeLapse[2].value}
                        fontSize={1.15}
                        fontWeight="bold" />
                </Grid>
                <Grid item xs sx={{ marginTop: '1.5rem' }}>
                    <Typography textAlign="center" variant="h3"
                        fontWeight='fontWeightBold'
                    >
                        $13,543
                    </Typography>
                </Grid>
                <Grid item xs >
                    <Graphic />
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="space-between"
                    sx={{ marginTop: '-2.25rem', backgroundColor: '#10161C', }}
                >
                    {
                        months.map(month =>
                            <Grid
                                key={month}
                                item
                                justifyContent="center"
                                xs='auto'
                            >

                                <Typography
                                    textAlign="center"
                                    fontWeight='fontWeightBold'>
                                    {month}
                                </Typography>
                            </Grid>)
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default Graphics
