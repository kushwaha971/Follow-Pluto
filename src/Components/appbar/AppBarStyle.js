import { Box, styled } from "@mui/material";

const AppbarStyle = styled(Box)(({ theme }) => ({
  ".logoStyle": {
    margin: "30px",
    [theme.breakpoints.down("md")]: {
      margin: "10px",
      marginTop: "20px",
    },
  },

  ".Logo": {
    height: "45px",
    width: "180px",
    [theme.breakpoints.down("md")]: {
      height: "25px",
      width: "100px",
      marginLeft: "-20px",
    },
  },
}));

export default AppbarStyle;
