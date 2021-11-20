import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material';

const Statistics = () => {


    const { palette } = useTheme()
    const { primary } = palette
    const statistics = [
        { color: 'blue' },
        { color: 'red' },
        { color: 'green' },
        { color: 'gray' },
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
                    statistics.map((statistic, i) =>
                        <Grid
                            item
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
                            {statistic.color}
                        </Grid>
                    )
                }
            </Grid>

        </Box>
    );
}
export default Statistics