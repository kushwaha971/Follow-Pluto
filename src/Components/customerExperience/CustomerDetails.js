import { Box, Button, Dialog, DialogTitle } from "@mui/material";
import { Formik, Form, Field } from "formik";
import React from "react";

import FormValidation, { validationSchem } from "./FormValidation";
import Swal from "sweetalert2";

function CustomerDetails({ open, setOpen, message }) {
  const handleClose = () => {
    setOpen(false);
  };

  const textFieldStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            fontFamily: "Dancing Script",
            fontWeight: "600",
            fontSize: "25px",
            marginBottom: "-25px",
            color: "#dd2c00",
          }}
        >
          Fill the Details
        </DialogTitle>
        <Box
          sx={{
            padding: "25px ",
            margin: "10px",
          }}
        >
          <Formik
            validationSchema={validationSchem}
            initialValues={{ name: "", mobile: "", message: message }}
            onSubmit={(values) => {
              handleClose();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Message sent successfully!",
                showConfirmButton: false,
                timer: 2000,
              });

              console.log(values);
            }}
          >
            <Form>
              <label
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "15px",
                  margin: "5px",
                }}
              >
                Name:
              </label>
              <Field
                name="name"
                type="text"
                label="Outlined"
                variant="outlined"
                placeholder="Enter your name"
                fullWidth
                style={textFieldStyle}
              />
              <FormValidation name="name" />

              <br />
              <label
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "15px",
                  margin: "5px",
                }}
              >
                Mobile Number:
              </label>
              <Field
                name="mobile"
                type="text"
                label="Outlined"
                placeholder="Enter your mobile number"
                variant="outlined"
                fullWidth
                style={textFieldStyle}
              />
              <FormValidation name="mobile" />

              <br />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "20px",
                  fontFamily: "Dancing Script",
                  textTransform: "capitalize",
                  padding: "8px 20px",
                  margin: "12px 0",
                  border: "none",
                  borderRadius: "4px",
                  "&:hover": {
                    backgroundColor: "#4CAF50",
                  },
                }}
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}

export default CustomerDetails;
