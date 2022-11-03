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
    height: "40px",
    width: "150px", 
    [theme.breakpoints.down("md")]: {
      height: "40px",
      width: "120px",
      marginLeft: "-20px",
    },
  },
}));

export default AppbarStyle;
