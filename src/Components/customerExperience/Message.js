import {  Box, Button, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CustomerDetails from "./CustomerDetails";
import Swal from 'sweetalert2'



const MessageStyle = styled(Box)(({ theme }) => ({
  ".textareaStyle": {
    width: "83%",
  },
  ".buttonStyle": {
    marginLeft: "10px",
    backgroundColor: "#ff5722",
  },
  ".container": {
    margin: "15px",
    marginTop: "30px",
    marginLeft: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Message() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [sentMessage,setSentMessage] = useState();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(message.length<1){
      Swal.fire({
        icon: 'warning',
        text: 'Please! Write Something',
      })

    }
    else{
     setOpen(true);
    setSentMessage(message)
    setMessage("");

    }
    
  };

  return (
    <MessageStyle>
      <form  onSubmit={handleSubmit}>
      <Box className="container">
        <TextField
          type="text"
          name="message"
          value={message}
          required
          onChange={handleChange}
          placeholder="Share anything you want."
          className="textareaStyle"
        />
        <Button
          type="submit"
          className="buttonStyle"
          sx={{
            borderRadius: "80px",
            color: "white",
            "&: hover": { backgroundColor: "#ff5722" },
          }}
        >
          <SendIcon />
        </Button>
        </Box>
      </form>
      <CustomerDetails open={open} setOpen={setOpen} message={sentMessage} />
    </MessageStyle>
  );
}

export default Message;
