import { Box, styled } from "@mui/material";

const CustomerFeedbackStyle = styled(Box)(({ theme }) => ({
    
        width: '25%',
        margin: '20px',
        marginLeft: '500px',
        
    [theme.breakpoints.down("md")]:{
        textAlign: 'auto',
        width: '90%',
        margin: '10px',
        marginLeft: '15px',
    },
    ".helloStyle":{
        fontFamily: 'Dancing Script',
        fontSize: "27px",
        fontWeight: "700",
        marginLeft: '10px',
        color: '#dd2c00',
    
    },
    ".WelcomeStyle":{ 
        fontFamily: 'Montserrat',
        fontSize: "18px",
        fontWeight: "700",
        marginLeft: '10px',
        color: '#263238',
    },
    ".container":{
        margin: '15px',
        marginTop: '30px',
        marginLeft: '10px',
        display: 'flex',
        justifyContent: 'space-between'
    },
 
   

}))

export default CustomerFeedbackStyle;