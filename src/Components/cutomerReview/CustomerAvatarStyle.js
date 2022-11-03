import { Box, styled } from "@mui/material";

const CustomerAvatarStyle = styled(Box)(({theme}) =>({
    width: '24%',
    margin: '40px',
    marginLeft: '500px',
    [theme.breakpoints.down("md")]:{
        width: '82%',
        margin: '40px',
        marginLeft: '22px',
    },
    ".avatarContainer":{
        display: 'flex',
        flexDirection: 'row',
        align: 'center',
        overflowX: 'scroll',
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
        "::-webkit-scrollbar":{
            display: 'none'
        },
    },
    ".avatarBorder":{

        margin: '5px',
        padding:'1px',
        
        borderRadius: '50%',
       border: "2.5px solid rgba(25, 235, 245, 0.1)",
        background: 'linear-gradient(200deg, rgba(255,0,215,1) -70%, rgba(126,10,162,1) 69%)',
      
    },
    ".nameStyle":{
        fontFamily: 'Roboto',
        fontWeight: '500',
        marginLeft: '12px', 
        color: '#263238',
    },

}))

export default CustomerAvatarStyle;