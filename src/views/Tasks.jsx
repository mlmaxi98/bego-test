import { Box, Grid, Typography } from "@mui/material"
import Carousel from 'react-material-ui-carousel'
import Task from '../components/task'
import { tasks } from '../utils/Consts'
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
                    tasks.map((task, t) => <Task task={task} key={task.name + t} />)
                }
            </Carousel>
        </Box >
    )
}

export default Tasks