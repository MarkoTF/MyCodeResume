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
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 4,
          borderRadius: 10
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: 'white',
          background: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.05)',
          boxSizing: 'border-box',
          backdropFilter: 'blur(10px)'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: theme.palette.black.main
        },
        h3: {
          fontSize: '2.7rem',
        },
      }
    }
  }
});