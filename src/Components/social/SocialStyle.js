import { Box, styled } from "@mui/material";

const SocialStyle = styled(Box)(({ theme }) => ({
  ".socialContainer": {
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "40px",
      marginLeft: "22px",
    
     
    },
  },
  ".socialPaperStyle": {
    // [theme.breakpoints.down("md")]: {
        backgroundColor: '#ff5722',
        // height: '12vh',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-around'
        
    // },
},
    ".mediaStyle":{
        padding: '8px',
        color: 'white',
        textDecoration: 'none'

    },
  
}));

export default SocialStyle;
