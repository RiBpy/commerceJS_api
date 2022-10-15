import React from 'react'
import FieldInput from './FieldInput'
import { InputLabel,Select,MenuItem,Grid,Typography} from '@mui/material'
import {useForm,FormProvider} from "react-hook-form"
const AddressForm = () => {
  const methods=useForm()
  return (
    <>
      <Typography variant='h6' className='px-6 py-4'>Shipping Address</Typography>
      <FormProvider {...methods}>
          <form className='px-6'>
          <Grid container spacing={2} className="py-2">
            <FieldInput name="firstname" label="First Name" required/>
            <FieldInput name="lastname" label="Last Name" required/>
            <FieldInput name="address1" label="Address" required/>
            <FieldInput name="email" label="Email" required/>
            <FieldInput name="city" label="City" required/>
            <FieldInput name="zip" label="ZIP" required/>
          </Grid>
          </form>
      </FormProvider>
    </>
  )
}

export default AddressForm