import { Box, styled } from "@mui/material";

const AppbarStyle = styled(Box)(({ theme }) => ({
  
  width: '25%',
  marginLeft: '450px',
[theme.breakpoints.down("sm")]:{
  marginLeft: '15px',
  width: '90%',
},
  ".logoStyle": {
    margin: "30px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px",
      marginTop: "20px", 
    },
  },

  ".Logo": {
    height: "40px",
    width: "150px", 
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      width: "120px",
      marginLeft: "-20px",
    },
  },
  ".menuButtonStyle":{
    fontFamily: "Ubuntu Condensed",
    backgroundColor: "#ff5722",
    color: "white",
    fontWeight: "600",
    fontSize: "15px",
    textTransform: "capitalize",
    padding: "2.5px",
    margin: "12px 0",
    border: "none",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#ff5722",
    },
  }
}));

export default AppbarStyle;
