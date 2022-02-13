import { createTheme } from "@mui/material";

const primary = "#6E3CBC";
const primaryLight = '#8B63C9';
const primaryDark = '#4D2A83';

const secondary = "#289ebf";
const secondaryLight = '#53B1CB';
const secondaryDark = '#1C6E85';

// const secondary = "#B8E4F0";
// const secondaryLight = '#C6E9F3';
// const secondaryDark = '#809FA8';

const error = '#bf1435';
const warning = '#bcae3c';
const info = '#7267CB';
const white = '#fff';

const textPrimary = 'rgba(0,0,0,0.71)';
const textSecondary = 'rgba(0,0,0,0.6)';


const theme = createTheme({
  // typography: { // seems to not be applied to the dashboard cards, but is working on everything else
  //   fontFamily: [
  //     '-apple-system',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     'Roboto',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(','),
  //   fontSize: 15,
  // }, 
  palette: {
    type: 'light',
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: error,
    },
    warning: {
      main: warning,
      contrastText: white,
    },
    info: {
      main: info,
    },
    text: {
      primary: textPrimary,
    },
    background: {
      default: '#f7f7f7',
    }
  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paperAnchorLeft: {
          background: `linear-gradient(-45deg, ${primaryLight}, ${primary} 60%, ${primaryDark} )`,
          color: white,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        button: {
          "&:hover": {
            backgroundColor: "#8B63C9",
            color: "white",
          },
          "&.Mui-selected": {
            backgroundColor: "#4D2A83",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          minWidth: 275,
          borderTopWidth: 15,
          borderColor: primary,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h3: {
          color: textPrimary
        },
        h4: {
          color: primary
        },
        h6: {
          color: textSecondary
        },
        subtitle1: {
          color: primary
        }

      }
    },
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          "&:hover": {
            backgroundColor: primaryLight,
            opacity: '70%',
            color: white
          },
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          color: white,
          backgroundColor: secondaryLight,
          opacity: '90%',
          "&:hover": {
            backgroundColor: secondaryDark,
          },
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          color: white,
          background: `linear-gradient(to bottom, ${secondary}, rgba(83,177,203,0.80) )`
        }
      }
    }
  },

});

export default theme;
