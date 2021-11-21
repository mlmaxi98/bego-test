import { useState } from "react";
import { createTheme, responsiveFontSizes } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';

const useMode = () => {
    const [mode, setMode] = useState(true)
    const toggleMode = () => setMode(!mode)
    const colorBar = mode ? grey[500] : yellow[500]
    const colorBarHover = mode ? grey[700] : yellow[700]
    const theme = responsiveFontSizes(createTheme({
        palette: {
            mode: mode ? 'dark' : 'light',
            primary: {
                main: '#FFBE00'
            },
            secondary: grey,
            error: {
                main: colorBar
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
        typography: {
            fontFamily: ['"Avenir LT Std"', 'sans-serif'].join(','),
            fontWeightBold: 700
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                    html {
                        scroll-behavior: smooth;
                        -webkit-scroll-behavior: smooth;
                        scrollbar-color: ${colorBar} transparent;
                        scrollbar-width: thin;
                    }
                    ::-webkit-scrollbar {
                        width: 7.5px;
                    }
                    ::-webkit-scrollbar-track {
                        background: transparent; 
                    }
                    ::-webkit-scrollbar-thumb {
                        background: ${colorBar};
                    }
                    ::-webkit-scrollbar-thumb:hover {
                        background: ${colorBarHover};
                    }
                `,
            },
            MuiButtonBase: {
                defaultProps: {
                    disableRipple: true
                }
            },
            MuiButton: {
                defaultProps: {
                    disableRipple: true
                }
            }
        },
    }));

    return {
        mode,
        toggleMode,
        theme
    }
}

export default useMode