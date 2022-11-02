import { ErrorMessage } from 'formik';
import React from 'react'
import * as yup from "yup";

export const validationSchem = yup.object({
    name: yup.string().required("Required!"),
    mobile: yup.string().required("Required!"),
  });
  
function FormValidation({ name }) {
  return (
    <div style={{color: 'red',fontFamily: 'Poppins', fontSize: '12px', fontWeight: '500',marginLeft: '2px'}}>
    <ErrorMessage name={name}  />
    </div>
  )
}

export default FormValidation