import { Box, Grid, Typography } from "@mui/material"
import Carousel from 'react-material-ui-carousel'
import Task from '../components/task'
import { tasks } from './Consts'
const Tasks = () => {

    return (
        <Box sx={{
            width: '100%',
        }}>
            <Grid container alignItems="center" spacing={1} sx={{ marginBottom: '9px' }}>
                <Grid item>
                    <Typography variant='tabInit'>
                        Upcoming Tasks
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='five'>
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
                    tasks.map(task => <Task task={task} key={task.name} />)
                }
            </Carousel>
        </Box >
    )
}

export default Tasks