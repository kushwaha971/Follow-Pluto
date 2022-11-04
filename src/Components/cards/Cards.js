import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import AvatarList from "../cutomerReview/AvatarList";
import CardStyle from "./CardStyle";
import "aos/dist/aos.css";
import AOS from "aos";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Cards() {
  AOS.init({
    duration: 1200,
  });

  return (
    <CardStyle>
      <Box>
        <Grid container>
          {AvatarList.map((item) => {
            return (
              <>
                <div id={item.to}>
                  <Grid item xs={12} id={item.id} data-aos="zoom-in">
                    <Card className="cardContainer">
                      <CardHeader
                        avatar={
                          <Avatar
                            src={item.image}
                            sx={{ border: "3px solid red" }}
                          />
                        }
                        action={
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon sx={{ color: "red" }} />
                          </IconButton>
                        }
                        title={
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontFamily: "Montserrat",
                              fontSize: "15px",
                              fontWeight: "700",
                              color: "#263238",
                            }}
                          >
                            {item.title}
                          </Typography>
                        }
                        // subheader={
                        //   <Typography
                        //     sx={{
                        //       fontFamily: "Montserrat",
                        //       fontSize: "10px",
                        //       fontWeight: "700",
                        //       color: "#757575",
                        //     }}
                        //   >
                        //     Lorem, ipsum dolor.
                        //   </Typography>
                        // }
                      />
                      <Box className="cardStyle">
                        <CardContent>
                          <Typography
                            variant="subtitle2"
                            className="cardTextStyle"
                          >
                            {item.desc}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <IconButton aria-label="share" disabled>
                          <Rating name="read-only" value={item.rating} readOnly />
                          </IconButton>
                        </CardActions>
                      </Box>
                    </Card>
                  </Grid>
                </div>
              </>
            );
          })}
        </Grid>
      </Box>
    </CardStyle>
  );
}

export default Cards;
