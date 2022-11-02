import { Box, styled } from "@mui/material";

const AppbarStyle = styled(Box)(({ theme }) => ({
  
  width: '25%',
  marginLeft: '450px',
[theme.breakpoints.down("md")]:{
  marginLeft: '15px',
},
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
