import { Box, styled } from "@mui/material";

const CardStyle = styled(Box)(({ theme }) => ({
  ".cardContainer": {
    width: "25%",
    background: "#f3e5f5",
    margin: "10px",
    borderRadius: "15px",
    marginLeft: "500px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
      width: "90%",
    },
  },
  ".cardStyle": {
    borderRadius: "45% 5% 0 0",
    padding: "0.8rem",
    background:
      "radial-gradient(ellipse farthest-corner at 0 130%, #ff7043 2%, #ff8a65 70%, #ff7043  70%)",
  },
  ".cardTextStyle": {
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "11px",
    paddingLeft: "35px",
    textAlign: "left",
  },
}));
export default CardStyle;
