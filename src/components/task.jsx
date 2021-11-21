import { Box, Grid, LinearProgress, Typography, styled } from "@mui/material"

const Task = ({ task }) => {
    const {
        order, name, days, progress,
        order2, name2, days2, progress2,
    } = task;
    const tasks = [
        { order, name, days, progress },
        { order: order2, name: name2, days: days2, progress: progress2 }
    ]

    const Linear = styled(LinearProgress)({
        background: '#494C50',
        borderRadius: '5px',
        marginTop: '4px',
        marginBottom: '6px',
    })

    return (
        <Box sx={{ minHeight: '7.625rem' }}>
            <Grid container>
                {
                    tasks.map(({ order, name, days, progress }, i) => {
                        return (
                            <Grid
                                key={name}
                                item
                                xs={6}
                                sx={{
                                    paddingRight: i === 0 && 0.5,
                                    paddingLeft: i === 1 && 0.5,
                                    minHeight: '6.625rem',
                                    zIndex: 99999,
                                    cursor: 'grab'
                                }}>
                                <Box
                                    sx={{
                                        boxShadow: 'inset -2px -2px 4px 0 #040B11, inset 2px 2px 4px 0 #1C232A, 0 13px 9px 0 #000000',
                                        borderRadius: '0.5rem',
                                        p: 2,
                                        paddingBottom: 1,
                                        marginBottom: 2,
                                    }}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography variant='tabInit'>
                                                Order {order}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography
                                                sx={{ lineHeight: '26px', }}
                                                variant='cardSubtitle'
                                            >
                                                {name}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        sx={{ marginTop: '5px' }}
                                        alignItems="center">
                                        <Grid item xs >
                                            <Typography
                                                variant='progress'
                                                sx={{ lineHeight: '16px', fontSize: '12px' }}>
                                                Progress
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography
                                                component='p'
                                                variant='progress'
                                                textAlign="right">
                                                {progress}%
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Linear variant="determinate" value={progress} />
                                    <Typography component='p' textAlign="right" variant='progress' >
                                        {days} {days > 1 ? 'days' : 'day'} left
                                    </Typography>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid >
        </Box >
    )
}

export default Task