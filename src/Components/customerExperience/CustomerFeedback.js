import { Box,  Typography } from "@mui/material";
import React from "react";
import CustomerFeedbackStyle from "./CustomerFeedbackStyle";
import Message from "./Message";




function CustomerFeedback() {
  return (
    <CustomerFeedbackStyle>
      <Typography variant="h6" className="helloStyle">
        Hello Foodies !
      </Typography>
      <Typography variant="h5" className="WelcomeStyle">
        Welcome to Pluto
      </Typography>
      <Box>
        <Message/>
      </Box>
    </CustomerFeedbackStyle>
  );
}

export default CustomerFeedback;
