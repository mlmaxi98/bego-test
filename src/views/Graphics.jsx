import { Box, Grid, Typography, styled } from '@mui/material/';
import { timeLapse, months } from '../utils/Consts'
import Tabs from '../components/tabs';
import Graphic from '../components/graphic';

const Graphics = () => {

    const Months = styled(Typography)({
        userSelect: 'none',
        color: '#89898A',
        fontSize: '16px',
        fontWeight: 900,
        letterSpacing: 0,
        lineHeight: '22px',
        '&:hover': {
            color: '#FFFFFF'
        }
    })

    return (
        <>
            <Box sx={{
                backgroundColor: '#10161C',
                border: '1px solid #10161C ',
                borderRadius: '1rem',
                boxShadow: 'inset 2px 2px 6px 0 #1C232A, inset -2px -2px 6px 0 #040B11',
                minHeight: '22.188rem',
                maxWidth: '100%',
            }}>

                <Grid container>
                    <Grid item xs={12} sx={{ marginTop: '0rem' }}>
                        <Tabs
                            type="graph"
                            elements={timeLapse}
                            initial={timeLapse[2].value}
                        />
                    </Grid>
                    <Grid item container xs={12} sx={{ marginTop: '1.5rem' }} justifyContent="center" alignItems="center">

                        <Grid item sx={{
                            marginBottom: 'auto',
                            marginTop: '0.5rem',
                            marginRight: '0.5rem',
                        }}>
                            <Typography variant='dollar'>
                                $
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='money'>
                                13,543
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}> <Graphic /> </Grid>
                    <Grid
                        item
                        container
                        justifyContent="space-between"
                        sx={{ marginTop: '-2.5rem', zIndex: 99999 }}>
                        {
                            months.map((month, k) =>
                                <Grid
                                    key={k + month}
                                    item
                                    justifyContent="center"
                                    xs='auto'
                                >
                                    <Months>
                                        {month}
                                    </Months>
                                </Grid>)
                        }
                    </Grid>
                </Grid>
            </Box>
            <Grid
                container
                justifyContent='center'
                sx={{
                    paddingTop: '44px',
                    paddingBottom: '22px',
                }}>
                <Grid item xs={5}
                    sx={{
                        minHeight: '5px',
                        backgroundColor: '#10161C',
                        borderRadius: '5px'
                    }} />
            </Grid>
        </>
    )
}

export default Graphics
