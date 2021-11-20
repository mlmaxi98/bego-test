import { Box, Container } from '@mui/material/';
import Navbar from './Navbar'
import Graphics from './Graphics';
import Tabs from '../components/tabs';
import Statistics from './Statistics';
import Tasks from './Tasks';

const Home = () => {
    const tasks = [
        { name: 'All', value: 'all' },
        { name: 'In Progress', value: 'inProgress' },
        { name: 'Started', value: 'started' },
        { name: 'Completed', value: 'completed' },
    ]


    return (
        <Box component='section'
            sx={{
                minHeight: '100vh',
                backgroundColor: '#040B11',
            }}>
            <Container maxWidth='sm'>
                <Navbar />
                <Tabs elements={tasks} initial={tasks[0].value} />
                <Tasks />
                <Statistics />
                <Graphics />
            </Container>
        </Box>
    )

}

export default Home