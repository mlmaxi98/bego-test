import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useTheme } from '@mui/material';

const CustomTabs = ({
    elements, initial, size, weight, type }) => {

    const [value, setValue] = useState(initial);
    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    const { palette } = useTheme()
    const { primary } = palette

    return (
        <Box sx={{ width: '100%', py: 5 }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="white"
                TabIndicatorProps={{
                    style: {
                        width: 30,
                        height: 3,
                        borderTop: `2px solid ${primary.main}`,
                        transform: "translateY(-10px)",
                        alignSelf: "flex-start",
                        marginLeft: "1rem",
                        borderRadius: '5px',
                    },
                }}
                indicatorColor='primary.main'
                variant='fullWidth'
            >
                {
                    elements.map(tab => {
                        return (
                            <Tab
                                key={tab.name}
                                value={tab.value}
                                label={tab.name}

                                sx={{
                                    minWidth: (
                                        tab.value === 'inProgress'
                                        || tab.value === 'completed'
                                    ) && '30%',
                                    color: value === tab.value && palette.primary.main,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    marginLeft: (
                                        type === 'graph'
                                        && tab.value !== 'week'
                                    ) && '2.5%',
                                    marginRight: type === 'graph' && '2.5%',
                                    textTransform: 'none',
                                    textAlign: 'left',
                                    fontSize: size && `${size}px`,
                                    fontWeight: weight,
                                    letterSpacing: 0,
                                    lineHeight: '26px',
                                }}
                            />

                        )
                    })
                }
            </Tabs>
        </Box>
    );
}
export default CustomTabs