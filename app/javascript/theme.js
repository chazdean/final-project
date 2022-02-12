import { createTheme } from "@mui/material";

const primaryColor = "#6E3CBC";
const secondaryColor = "#289ebf";

const theme = createTheme({
  typography: { // seems to not be applied to the dashboard cards, but is working on everything else
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 15,
  }, 
  palette: {
    type: "light",
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paperAnchorLeft: {
          backgroundColor: primaryColor,
          color: "white",
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
          borderColor: primaryColor,
        },
      },
      
    },
  },
 
});

export default theme;
