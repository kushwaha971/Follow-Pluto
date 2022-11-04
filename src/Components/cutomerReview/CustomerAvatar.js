import React from "react";
import CustomerAvatarStyle from "./CustomerAvatarStyle";
import AvatarList from "./AvatarList";
import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-scroll";

function CustomerAvatar() {
  return (
    <CustomerAvatarStyle>
      <Box className="avatarContainer">
        {AvatarList.map((item) => {
          return (
            <div>
              <Box id={item.id} className="avatarBorder">
                <Link to={item.to} spy={true} smooth={true}>
                  <Avatar src={item.image} sx={{ width: 50, height: 50 }} />
                </Link>
              </Box>
              <Typography variant="subtitle" className="nameStyle">
                {item.name}
              </Typography>
            </div>
          );
        })}
      </Box>
    </CustomerAvatarStyle>
  );
}

export default CustomerAvatar;
