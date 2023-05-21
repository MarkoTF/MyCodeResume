import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        black: Palette['primary']
    }

    interface PaletteOptions {
        black: PaletteOptions['primary']
    }
}

export let theme = createTheme({
    palette: {
        mode: 'light',
        black: {
            main: '#383838'
        }
    }
});

theme = createTheme(theme, {
  palette: {
    mode: 'light',
    primary: {
      main: '#1C1E63',
    },
    secondary: {
      main: '#A5A6F6',
      contrastText: theme.palette.black.main,
    },
    text: {
      primary: theme.palette.black.main,
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
    },
    MuiButton: {
        styleOverrides: {
            root: {
                boxShadow: 'none'
            },
            endIcon: {
                marginLeft: 4
            }
        }
    }
  }
});