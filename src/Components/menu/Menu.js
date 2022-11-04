import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import CardStyle from "../cards/CardStyle";
import MenuList from "./MenuList";
import { Box, Card, CardActionArea, CardMedia, Grid } from "@mui/material";

function Menu() {
  AOS.init({
    duration: 1200,
  });

  return (
    <CardStyle>
      <Box>
        <Grid container>
          {MenuList.map((item) => {
            return (
              <>
                <Grid item xs={12} id={item.id} data-aos="zoom-in">
                  <Card className="cardContainer">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="500" 
                        image={item.imgsrc}
                        alt="green iguana"
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </CardStyle>
  );
}

export default Menu;
