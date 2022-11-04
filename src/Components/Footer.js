import { Box, styled, Typography } from "@mui/material";
import React from "react";

const FooterStyle = styled(Box)(({ theme }) => ({
  margin: '15px',
  marginRight: '180px',
  [theme.breakpoints.down("sm")]:{
    margin: '10px',
    marginRight: '12px',
  },
  
}))

function Footer() {
  return (
    <FooterStyle>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          color: "#5C5C5C",
          fontFamily: "Roboto",
          fontSize: "13px",
          fontWeight: "700",
          lineSpacing: "1px",
          lineHeight: "18px",
          paddingBottom: "5px",
        }}
      >
        Copywright 2022 Pluto India Foods
      </Typography>
    </FooterStyle>
  );
}

export default Footer;
