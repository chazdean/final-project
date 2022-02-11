import { createTheme } from "@mui/material";

const primaryColor = "#453592";
const secondaryColor = "#3a54af";

const theme = createTheme({
  palette: {
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
        paperAnchorLeft	: {
          backgroundColor: primaryColor,
          color: "white"
        },
      },
    },
  },
});

export default theme;
