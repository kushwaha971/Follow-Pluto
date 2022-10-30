import { Box, styled } from "@mui/material";

const CustomerFeedbackStyle = styled(Box)(({theme}) =>({
    [theme.breakpoints.down("md")]:{
        margin: '10px',
        marginLeft: '15px',
    },
    ".helloStyle":{
        fontFamily: 'Dancing Script',
        fontSize: "20px",
        fontWeight: "700",
        marginLeft: '10px',
        color: '#dd2c00',
    
    },
    ".WelcomeStyle":{
        fontFamily: 'Montserrat',
        fontSize: "15px",
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
    ".avatarStyle":{
        width: "56px",
         height: "56px",

    },
    ".textareaStyle":{
        width: '80%',
        // borderRadius: '30%',
        

    },

}))

export default CustomerFeedbackStyle;