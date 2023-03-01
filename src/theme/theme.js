import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

// import blue from "@mui/material/colors/blue";
let theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      contrastText: grey[900],
    },
    secondary: {
      main: "#edf2ff",
      contrastText: grey[900],
    },
  },
});

export default theme;
