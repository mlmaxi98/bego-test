import { Box, Grid, Typography } from "@mui/material"
import Carousel from 'react-material-ui-carousel'
import Task from '../components/task'
const Tasks = () => {

    const tasks = [

        {
            order: '#890PO90',
            name: 'Bryan Williams',
            days: 1,
            progress: 20,
            order2: '#90Q241',
            name2: 'Marcus Klaus',
            days2: 3,
            progress2: 20
        },
        {
            order: '#PO90R2',
            name: ' Williams Bryan',
            days: 1,
            progress: 20,
            order2: '#890PO90',
            name2: 'Klaus Marcus',
            days2: 3,
            progress2: 40
        },
        {
            order: '#1L54J1',
            name: 'Bryan Klaus',
            days: 1,
            progress: 20,
            order2: '#ZXC981',
            name2: 'Marcus Williams',
            days2: 3,
            progress2: 50
        },
    ]

    return (
        <Box sx={{
            width: '100%',
        }}>
            <Grid container alignItems="center" spacing={1} sx={{ marginBottom: '9px' }}>
                <Grid item>
                    <Typography sx={{
                        fontSize: '14px',
                        fontWeight: 900,
                        letterSpacing: 0,
                        lineHeight: '26px',
                    }}>
                        Upcoming Tasks
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{
                        fontSize: '14px',
                        fontWeight: 300,
                        letterSpacing: 0,
                        lineHeight: '19px',
                    }}>
                        5
                    </Typography>
                </Grid>
            </Grid>
            <Carousel
                animation='slide'
                autoPlay={false}
                indicators={false}
                navButtonsAlwaysInvisible={true}
            >
                {
                    tasks.map((task, i) => <Task task={task} key={i} />)
                }
            </Carousel>
        </Box >
    )
}

export default Tasks