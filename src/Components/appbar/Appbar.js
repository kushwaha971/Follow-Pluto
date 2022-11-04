import * as React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import logo from "./../images/PlutoLogo.png";
import AppBarStyle from "./AppBarStyle";
import { useNavigate } from "react-router";

function Appbar() {
  const negivate = useNavigate();
  const goToMenu = () =>{
    negivate("/menu")
  }
  return (
    <AppBarStyle>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="logoStyle"
            >
              <img src={logo} className="Logo" alt="" />
            </Typography>
            <Button
              variant="contained"
              color="inherit"
              className="menuButtonStyle"
              onClick={goToMenu}
            >
              Menu
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </AppBarStyle>
  );
}

export default Appbar;
