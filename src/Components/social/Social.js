import { Box, Link, Paper, Typography } from "@mui/material";
import React from "react";
import SocialStyle from "./SocialStyle";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Social() {
  return (
    <SocialStyle>
      <Box className="socialContainer">
        <Paper elevation={2} className="socialPaperStyle">
          <Link
            className="mediaStyle"
            href="https://www.instagram.com/pluto_india_food/tagged/"
            target="_blank"
          >
            <InstagramIcon aria-label="Example" sx={{ fontSize: "30px" }} />
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "Dancing Script",
                fontSize: "15px",
              }}
            >
              Follow Us
            </Typography>
          </Link>
          <Link
            className="mediaStyle"
            href="http://www.google.com"
            target="_blank"
          >
            <WhatsAppIcon sx={{ fontSize: "30px" }} />
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "Dancing Script",
                fontSize: "15px",
              }}
            >
              Joins Us
            </Typography>
          </Link>
          <Link
            className="mediaStyle"
            href="https://chat.whatsapp.com/LiIMt1Y8VneLnKS7PGIUiB"
            target="_blank"
          >
            <LocationOnIcon sx={{ fontSize: "30px" }} />
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "Dancing Script",
                fontSize: "15px",
              }}
            >
              Location
            </Typography>
          </Link>
        </Paper>
      </Box>
    </SocialStyle>
  );
}

export default Social;
