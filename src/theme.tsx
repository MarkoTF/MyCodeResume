import { ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1C1E63',
    },
    secondary: {
      main: '#A5A6F6',
      contrastText: '#383838',
    },
    text: {
      primary: '#2D2D2D',
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiAppBar: {
        styleOverrides: {
            root: {
                boxShadow: 'none'
            }
        }
    }
  }
};

export const theme = createTheme(themeOptions);