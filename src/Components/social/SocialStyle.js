import { Box, styled } from "@mui/material";

const SocialStyle = styled(Box)(({ theme }) => ({
  width: "24%",
  margin: "40px",
  marginLeft: "500px",

  [theme.breakpoints.down("md")]: {
    width: "95%",
    margin: "40px",
    marginLeft: "0px",
  },
  ".socialContainer": {
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "40px",
      marginLeft: "22px",
    },
  },
  ".socialPaperStyle": {
    backgroundColor: "#ff5722",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-around",
  },
  ".mediaStyle": {
    padding: "8px",
    color: "white",
    textDecoration: "none",
  },
}));

export default SocialStyle;
