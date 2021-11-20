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
            <Grid
                container
                xs={12}>
                {
                    tasks.map(({ order, name, days, progress }, i) => {
                        return (
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    paddingRight: i == 0 && 0.5,
                                    paddingLeft: i == 1 && 0.5,
                                    minHeight: '6.625rem',
                                    zIndex: 99999
                                }}>
                                <Box
                                    sx={{
                                        boxShadow: 'inset -2px -2px 4px 0 #040B11, inset 2px 2px 4px 0 #1C232A, 0 13px 9px 0 #000000',
                                        borderRadius: '0.5rem',
                                        p: 2,
                                        paddingBottom: 1,
                                        marginBottom: 2,
                                    }}>
                                    <Typography sx={{
                                        fontSize: "14px",
                                        fontWeight: 900,
                                        letterSpacing: 0,
                                        lineHeight: '16px'
                                    }}>
                                        Order {order}
                                    </Typography>
                                    <Typography sx={{
                                        color: '#C1C7D0',
                                        fontSize: "12px",
                                        fontWeight: 300,
                                        letterSpacing: 0,
                                        lineHeight: '26px',
                                    }}>
                                        {name}
                                    </Typography>
                                    <Grid container sx={{ marginTop: '10px' }}>
                                        <Grid item xs >
                                            <Typography sx={{
                                                color: '#C1C7D0',
                                                fontSize: "12px",
                                                fontWeight: 300,
                                                letterSpacing: 0,
                                                lineHeight: '16px'
                                            }}>
                                                Progress
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography textAlign="right" sx={{
                                                color: '#C1C7D0',
                                                fontSize: "10px",
                                                fontWeight: 300,
                                                letterSpacing: 0,
                                                lineHeight: '14px'
                                            }}>
                                                {progress}%
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Linear variant="determinate" value={progress} />
                                    <Typography textAlign="right" sx={{
                                        color: '#C1C7D0',
                                        fontSize: "10px",
                                        fontWeight: 300,
                                        letterSpacing: 0,
                                        lineHeight: '14px',
                                        textAling: 'right',
                                    }}>
                                        {days} {days > 1 ? 'days' : 'day'} left
                                    </Typography>
                                </Box>
                            </Grid >
                        )
                    })
                }
            </Grid >
        </Box >
    )
}

export default Task