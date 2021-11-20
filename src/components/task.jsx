import { Box, Grid, LinearProgress, Typography } from "@mui/material"
const Task = ({ task }) => {
    const {
        order, name, days, progress,
        order2, name2, days2, progress2,
    } = task;
    const tasks = [
        { order, name, days, progress },
        { order: order2, name: name2, days: days2, progress: progress2 }
    ]
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
                                    paddingRight: i == 0 ? 1 : 0.5,
                                    paddingLeft: i == 0 ? 0.5 : 1,
                                    minHeight: '6.625rem',
                                }}>
                                <Box
                                    sx={{
                                        boxShadow: 'inset -2px -2px 4px 0 #040B11, inset 2px 2px 4px 0 #1C232A, 0 13px 9px 0 #000000',
                                        borderRadius: '0.5rem',
                                        p: 2,
                                        marginBottom: 2,
                                    }}>
                                    <Typography sx={{
                                        fontSize: "14px",
                                        fontWeight: 900,
                                        letterSpacing: 0,
                                        lineHeight: '26px'
                                    }}>
                                        Order {order}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: "12px",
                                        fontWeight: 300,
                                        letterSpacing: 0,
                                        lineHeight: '16px'
                                    }}>
                                        {name}
                                    </Typography>
                                    <Grid container>
                                        <Grid item xs>
                                            <Typography sx={{
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
                                                fontSize: "10px",
                                                fontWeight: 300,
                                                letterSpacing: 0,
                                                lineHeight: '14px'
                                            }}>
                                                {progress}%
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <LinearProgress variant="determinate" value={progress} />
                                    <Typography textAlign="right" sx={{
                                        fontSize: "10px",
                                        fontWeight: 300,
                                        letterSpacing: 0,
                                        lineHeight: '14px',
                                        textAling: 'right',
                                    }}>
                                        {days} {days > 1 ? 'days' : 'day'} left
                                    </Typography>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default Task