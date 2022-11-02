import React from 'react'
import {Field, Formik} from 'formik'
import { Button, Dialog } from '@mui/material'

function Form({open, setOpen, message}) {

    const handleClose = () => {
        setOpen(false);
      };

  return (
    <Dialog open={open} onClose={handleClose}>
    <Formik 
        initialValues={{name: "", mobile: "", msg: message}}
        onSubmit={(values) => {
            console.log(values)
        }}
    >
        <Form>
            <Field label="Name" type='text' name="name" />
            <Field label="Mobile" type='text' name="mobile" />
            <Button type='submit' onClick={handleClose}>Submit</Button>
        </Form>
    </Formik>
    </Dialog>
  )
}

export default Form