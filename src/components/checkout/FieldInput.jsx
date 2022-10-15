import React from 'react'
import { TextField,Grid } from '@mui/material'
import { useFormContext,Controller } from 'react-hook-form'
const FieldInput = ({name,label,required}) => {
    const {control}=useFormContext()
  return (
    <Grid item xs={12} sm={6}>
       <Controller
         control={control}
         name={name}
         render = {({})=> (
             <TextField
                 label={label}
                 required
             />
         )}
       />
    </Grid>
  )
}

export default FieldInput