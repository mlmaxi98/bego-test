import { Box, Grid, Typography, SvgIcon } from '@mui/material';
import { useTheme } from '@mui/material';
import { Check, Clock, Flash, Menu } from '../icons'
const Statistics = () => {


    const { palette } = useTheme()
    const { primary } = palette
    const statistics = [
        {
            name: 'Total projects',
            total: 50,
            icon: Menu
        },
        {
            name: 'Completed',
            total: 15,
            icon: Check
        },
        {
            name: 'In Progress',
            total: 10,
            icon: Flash
        },
        {
            name: 'Delayed',
            total: 2,
            icon: Clock
        },
    ]
    return (
        <Box sx={{
            width: '100%',
            py: 5,

        }}>
            <Grid
                container
                xs={12}
                sx={{
                    boxShadow: 'inset -2px -2px 4px 0 #040B11, inset 2px 2px 4px 0 #1C232A, 0 13px 9px 0 #000000',
                    borderRadius: '0.5rem',
                }}>
                {
                    statistics.map(({ name, total, icon }, i) =>
                        <Grid
                            item
                            container
                            xs={6}
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
                                <img src={icon} />
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

        </Box >
    );
}
export default Statistics