import { Box, Grid, Typography } from '@mui/material';
import { Download, Chevron } from '../icons'
import { statistics } from '../utils/Consts'
const Statistics = () => {

    return (
        <Box sx={{
            width: '100%',
            py: 5,
        }}>
            <Grid container sx={{ marginBottom: '13px' }} alignItems="center">
                <Grid item xs={6}>
                    <Typography sx={{
                        fontSize: '16px',
                        fontWeight: 900,
                        letterSpacing: 0,
                        lineHeight: '26px',
                    }}>
                        Statistics
                    </Typography>
                </Grid>
                <Grid item xs={6}
                    container
                    justifyContent="flex-end"
                    sx={{
                    }}
                >
                    <Box sx={{
                        minHeight: '24px',
                        minWidth: '53px',
                        border: '1px solid #1C232A',
                        borderRadius: '4px',
                        backgroundColor: '#10161C',
                        boxShadow: 'inset -2px -2px 4px 0 #040B11, inset 2px 2px 4px 0 #1C232A'
                    }}>
                        <Grid container>
                            <Grid item xs={9} sx={{ display: 'flex', px: 1 }}
                                justifyContent="center"
                                alignItems="center">
                                <img src={Download} alt='download' />
                            </Grid>
                            <Grid item xs={3} sx={{ display: 'flex', borderLeft: '1px solid #494C50', px: 1 }}
                                justifyContent="center"
                                alignItems="center">
                                <img src={Chevron} alt='chevron' />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Grid
                container
                xs={12}
                sx={{
                    boxShadow: 'inset 2px 2px 6px 0 #1C232A, inset -2px -2px 6px 0 #040B11, 0 13px 9px 0 #000000',
                    borderRadius: '0.5rem',
                    border: '1px solid #10161C ',
                }}>
                {
                    statistics.map(({ name, total, icon }, i) =>
                        <Grid
                            item
                            container
                            xs={6}
                            key={name + total}
                            sx={{
                                minHeight: '4.3rem',
                                backgroundColor: '#10161C',
                                borderRight: (i === 0 || i === 2) && '1px solid #1C232A',
                                borderBottom: (i === 0 || i === 1) && '1px solid #1C232A',
                                borderTopLeftRadius: i === 0 && '0.5rem',
                                borderTopRightRadius: i === 1 && '0.5rem',
                                borderBottomLeftRadius: i === 2 && '0.5rem',
                                borderBottomRightRadius: i === 3 && '0.5rem',
                            }}>

                            <Grid
                                item xs={4}
                                sx={{ display: 'flex' }}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img src={icon} alt='icon' />
                            </Grid>
                            <Grid
                                item xs={8}
                                container
                                direction='column'
                                justifyContent="center"
                            >
                                <Grid item>
                                    <Typography
                                        sx={{
                                            color: '#C1C7D0',
                                            fontSize: '18px',
                                            fontWeight: 900,
                                            letterSpacing: 0,
                                            lineHeight: '26px',
                                        }}>
                                        {total}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        sx={{
                                            color: '#C1C7D0',
                                            fontSize: '14px',
                                            fontWeight: 300,
                                            letterSpacing: 0,
                                            lineHeight: '19px',
                                        }}
                                    >
                                        {name}
                                    </Typography>

                                </Grid>
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
}
export default Statistics