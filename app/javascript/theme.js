import { createTheme } from "@mui/material";

const primary = "#6E3CBC";
const primaryLight = '#8B63C9';
const primaryDark = '#4D2A83';

const secondary = "#289ebf";
const secondaryLight = '#53B1CB';
const secondaryDark = '#1C6E85';

const error = '#bf1435';
const warning = '#bcae3c';
const info = '#7267CB';
const white = '#fff';

const textPrimary = 'rgba(0,0,0,0.71)';
const textSecondary = 'rgba(0,0,0,0.6)';


const theme = createTheme({
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
            backgroundColor: primaryLight,
            color: "white",
          },
          "&.Mui-selected": {
            backgroundColor: primaryDark,
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        elevation8: {
          transition: 'all 0.5s ease',
          "&:hover": {
            transform: 'scale(1.05)'
          },
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
        h5: {
          color: textSecondary
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
          transition: 'all 0.5s ease',
          "&:hover": {
            backgroundColor: secondaryDark,
            transform: "scale(1.1)"
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
