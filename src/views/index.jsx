import { Box, Container } from '@mui/material/';
import { initialTab } from '../utils/Consts'
import Navbar from './Navbar'
import Graphics from './Graphics';
import Tabs from '../components/tabs';
import Statistics from './Statistics';
import Tasks from './Tasks';
const Home = () => {

    return (
        <Box component='section'
            sx={{
                minHeight: '100vh',
                backgroundColor: '#040B11',
            }}>
            <Container maxWidth='md'>
                <Navbar />
                <Tabs
                    elements={initialTab}
                    initial={initialTab[0].value}
                />
                <Tasks />
                <Statistics />
                <Graphics />
            </Container>
        </Box>
    )
}

export default Home