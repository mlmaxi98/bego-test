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
            order2: '#890PO90',
            name2: 'Marcus Klaus',
            days2: 3,
            progress2: 20
        },
        {
            order: '#890PO90',
            name: 'Bryan Williams',
            days: 1,
            progress: 20,
            order2: '#890PO90',
            name2: 'Marcus Klaus',
            days2: 3,
            progress2: 20
        },
        {
            order: '#890PO90',
            name: 'Bryan Williams',
            days: 1,
            progress: 20,
            order2: '#890PO90',
            name2: 'Marcus Klaus',
            days2: 3,
            progress2: 20
        },
    ]

    return (
        <Box sx={{
            pt: 3,
            width: '100%',
        }}>
            <Typography>
                Upcoming Tasks 5
            </Typography>
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
        </Box>
    )
}

export default Tasks