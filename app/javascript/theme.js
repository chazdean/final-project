import { createTheme } from "@mui/material";
import space from "../../public/space.jpg";

const primaryColor = "#555ea9";
const secondaryColor = "#3a54af";

const theme = createTheme({
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
          backgroundImage: `url(${space})`,
          color: "white",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        button: {
          "&:hover": {
            backgroundColor: primaryColor,
            color: "#FFF",
          },
          "&.Mui-selected": {
            backgroundColor: primaryColor,
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
    //Typography - use root to style the whole thing and then get more specific with h1, h2, so on
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 20,
        },
      },
    },
  },
});

export default theme;
