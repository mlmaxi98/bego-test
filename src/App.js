import { ThemeProvider } from '@mui/material/styles';
import useMode from './hooks/useMode'
import CssBaseline from '@mui/material/CssBaseline';
import Home from './views/home';
const App = () => {
  const { theme } = useMode()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home width={1920} height={1080} />
    </ThemeProvider>
  );
}

export default App;