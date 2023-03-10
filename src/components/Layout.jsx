import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { UIContext } from "./contexts/UI.context";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Layout() {
  const {
    isOpen: open,
    severity,
    onClose: handleClose,
    message,
  } = useContext(UIContext);

  const action = (props) => {
    console.log(props);
    return (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {/* {JSON.stringify({ isOpen: open, severity, handleClose, message })} */}
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </main>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        // message={message}
        // action={action}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
          {action}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Layout;
