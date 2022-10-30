import { Avatar, Box, TextField, Typography } from "@mui/material";
import React from "react";
import CustomerFeedbackStyle from "./CustomerFeedbackStyle";
const ariaLabel = { "aria-label": "description" };

function CustomerFeedback() {
  return (
    <CustomerFeedbackStyle>
      <Typography variant="h6" className="helloStyle">
        Hello Foodies !
      </Typography>
      <Typography variant="h5" className="WelcomeStyle">
        Welcome to Pluto
      </Typography>
      <Box className="container">
        <Avatar src="/broken-image.jpg" className="avatarStyle" />
        <TextField
          placeholder="Share anything you want."
          inputProps={ariaLabel}
          style={{ width: "80%", borderRadius: "40%" }}
          className="textareaStyle"
        />
      </Box>
    </CustomerFeedbackStyle>
  );
}

export default CustomerFeedback;
