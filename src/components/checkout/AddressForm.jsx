import React from 'react'
import FieldInput from './FieldInput'
import { InputLabel,Select,MenuItem,Grid,Typography} from '@mui/material'
import {useForm,FormProvider} from "react-hook-form"
import { useState } from 'react'
import {commerce} from '../../lib/commerce'
import { useEffect } from 'react'
const AddressForm = ({checkoutToken}) => {
  const [shippingCountries,setShippingCountries]=useState([])
  const [shippingCountry,setShippingCountry]=useState("")
  const [shippingSubdivisions,setShippingSubdivisions]=useState([])
  const [shippingSubdivision,setShippingSubdivision]=useState("")
  const [shippingOptions,setShippingOptions]=useState([])
  const [shippingOption,setShippingOption]=useState("")
  const methods=useForm()
  const fetchShippingCountries=async(checkoutTokenId)=>{
    const {countries} =await commerce.services.localeListShippingCountries(checkoutTokenId)
     setShippingCountries(countries)
     setShippingCountry(Object.keys(countries)[17])
  }
  const AllCountry=Object.entries(shippingCountries).map(([code,name])=>({id:code,label:name}))
  useEffect(()=>{
    fetchShippingCountries(checkoutToken.id)
  },[])
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
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} onChange={(e)=>setShippingCountry(e.target.value)}>
                {AllCountry.map(country=>(
                <MenuItem key={country.id} value={country.id}>
                   {country.label}
                </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivisions</InputLabel>
              <Select value={""} key={""}>
                Select Subdivisions
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={""} key={""}>
                Select Options
              </Select>
            </Grid>
          </Grid>
          </form>
      </FormProvider>
    </>
  )
}

export default AddressForm