import { Box, styled } from "@mui/material";

const CustomerAvatarStyle = styled(Box)(({theme}) =>({
    [theme.breakpoints.down("md")]:{
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
        "-webkit-scrollbar":{
            display: 'none'
        },
    },
    ".avatarBorder":{

        margin: '5px',
        padding:'0.5px',
        border: '3px solid',
        borderRadius: '25px',
        backgroundImage: 'radial-gradient(#880e4f, #f50057)',
    },
    ".nameStyle":{
        fontFamily: 'Roboto',
        fontWeight: '500',
        marginLeft: '12px',
        color: '#263238',
    },

}))

export default CustomerAvatarStyle;