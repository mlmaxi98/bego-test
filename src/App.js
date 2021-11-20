import { ThemeProvider } from '@mui/material/styles';
import useMode from './hooks/useMode'
import CssBaseline from '@mui/material/CssBaseline';
import Home from './views';
const App = () => {
  const { theme } = useMode()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;