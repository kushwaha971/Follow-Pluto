import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import React, { useEffect, useRef, useState } from "react";
import FormValidation, { validationSchem } from "./FormValidation";
import Swal from "sweetalert2";
import axios from "axios";

function CustomerDetails({ open, setOpen, message }) {
  const [loading, setLoading] = useState(false);
  const timer = useRef(0);
  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

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
            onSubmit={async (payload) => {
              let name = payload.name;
              let mobile = payload.mobile;
              let message = payload.message;
              let timeStamp = new Date();
              let date = timeStamp?.getDate();
              handleButtonClick();
              const WEBAPP_URL =
                process.env.NODE_ENV === "development" ||
                window.location.href?.includes("staging")
                  ? `https://script.google.com/macros/s/AKfycbwoiTuHtPPM50moZFsFU_UIBUDh7Q5xFxVNW3dP0P2SCCrC90mmxmJyWCGcAWsbaHq3/exec?Name=${name}&Mobile=${mobile}&Message=${message}&Date=${date}`
                  : `https://script.google.com/macros/s/AKfycbwoiTuHtPPM50moZFsFU_UIBUDh7Q5xFxVNW3dP0P2SCCrC90mmxmJyWCGcAWsbaHq3/exec?Name=${name}&Mobile=${mobile}&Message=${message}&Date=${date}`;

              await axios
                .post(WEBAPP_URL)
                .then((res) => {
                    handleClose();
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Message sent successfully!",
                      showConfirmButton: false,
                      timer: 3000,
                    });
                  console.log("res", res);
                })
                .catch((error) => {
                  console.log("error", error);
                });
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
              {loading ? (
                <Button 
                 variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "#ff5722",
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
                  <CircularProgress />
                </Button>
              ):( <Button
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
              </Button>)}
             
            </Form>
          </Formik>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}

export default CustomerDetails;
