import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import logo from "./../images/PlutoLogo.png";
import AppBarStyle from "./AppBarStyle";

function Appbar() {
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
          </Toolbar>
        </AppBar>
      </Box>
    </AppBarStyle>
  );
}

export default Appbar;
