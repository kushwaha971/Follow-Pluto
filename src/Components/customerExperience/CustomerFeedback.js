import { Box, Button, Link, Typography } from "@mui/material";
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
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff5722",
          borderRadius: "10px",
          marginTop: "10px",
          marginLeft: '11px',
          align: "center",
          fontFamily: "Montserrat",
          fontSize: "13px", 
          textTransform: "capitalize",
          fontWeight: "700",
          "&:hover": {
            backgroundColor: "#ff5722",
          },
        }}
      >
        <Link
          href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LDapjDfIKssyYLRSNagwtrRINTY0NU0xNkpJM0xLsTKoSE1JMzJJNTC0ME0xMU81TPYSKcgpLclXyEnMy05UKEssSsxLLM4EAE3mF3U&q=pluto+lanka+varanasi&oq=pluto+&aqs=chrome.1.35i39i355j46i39i175i199j69i60l4j69i57j69i65j0i67i433j46i175i199i273.4236j0j4&client=ms-android-xiaomi-rvo2b&sourceid=chrome-mobile&ie=UTF-8#wptab=s:H4sIAAAAAAAAAONgVuLVT9c3NCw2qYw3yCrLesRowS3w8sc9YSn9SWtOXmPU5OIKzsgvd80rySypFJLmYoOyBKX4uVB18uxi4vfJT07MCcjPDEoty0wtL17EKlaQU1qSr1CWWJSYl1icqVAEkQAAdfC1q3cAAAA"
          target="_blank"
          sx={{ textDecoration: "none", color: "white" }}
        >
          Please rate us on Google!
        </Link>
      </Button>
      <Box>
        <Message />
      </Box>
    </CustomerFeedbackStyle>
  );
}

export default CustomerFeedback;
