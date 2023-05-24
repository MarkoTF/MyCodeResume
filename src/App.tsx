import { theme } from 'theme';
import { ThemeProvider } from '@mui/material';
import Root from 'pages/Root';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Root />
    </ThemeProvider>
  );
}

export default App;
