import React from 'react'
import CustomerAvatarStyle from './CustomerAvatarStyle'
import AvatarList from './AvatarList'
import { Avatar, Box, Typography } from '@mui/material'

function CustomerAvatar() {
  return (
    <CustomerAvatarStyle>
    <Box className="avatarContainer">
    {
      AvatarList.map(item => {
        return(
          <div>
          <Box id={item.id} className="avatarBorder">
        <Avatar 
          src={item.image}
          sx={{ width: 56, height: 56 }}
        />
        </Box>
        <Typography variant="subtitle" className='nameStyle'>{item.name}</Typography>
        </div>
        )
      })
    }
    </Box>
    </CustomerAvatarStyle>
  )
}

export default CustomerAvatar