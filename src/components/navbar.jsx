import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useTheme } from '@mui/material';

const Navbar = () => {
    const [value, setValue] = useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { palette } = useTheme()
    const { primary } = palette
    const tabs = [
        { name: 'All', value: 'one' },
        { name: 'In Progress', value: 'two' },
        { name: 'Started', value: 'three' },
        { name: 'Completed', value: 'four' },
    ]
    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="white"
                indicatorColor="primary"
                TabIndicatorProps={{
                    style: {
                        width: 35,
                        borderTop: `1px solid ${primary.main}`,
                        transform: "translateY(-10px)",
                        alignSelf: "flex-start",
                        marginLeft: "5px",
                    },
                }}
                indicatorColor='primary.main'
                variant='fullWidth'
            >
                {
                    tabs.map(tab => {
                        return (
                            <Tab
                                key={tab.name}
                                value={tab.value}
                                label={tab.name}

                                sx={{
                                    color: value === tab.value && palette.primary.main,
                                    textTransform: 'none',
                                    textAlign: 'left',
                                    minWidth: tab.value === 'two' && '30%'
                                }}
                            />

                        )
                    })
                }
            </Tabs>
        </Box>
    );
}
export default Navbar