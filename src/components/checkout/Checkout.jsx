import React,{useState,useEffect} from 'react'
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';
import {commerce} from '../../lib/commerce'
import { Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider } from '@mui/material'
const steps=["Shipping Address","Payment Details"];
const Checkout = ({cart}) => {
    const [activeStep,setActiveStep]=useState(0)
    const [checkoutToken,setCheckoutToken]=useState(null)
    useEffect(()=>{
            const generateToken=async()=>{
            try {
                const token= await commerce.checkout.generateToken(cart.id,{type:"cart"})
                setCheckoutToken(token)       
            } catch (error) {
                
            }
        }
        generateToken()
    },[cart])
    const Form =()=>activeStep===0?<AddressForm checkoutToken={checkoutToken}/>:<PaymentForm/>
  return (
    <>
     <div className='ml-[15%] mr-[15%]'>
        <main className=''>
            <Paper className='py-[5%]'>
                <Typography variant='h6' align='center' className="font-semibold text-poppins text-green-700">Checkout</Typography>
                <Stepper activeStep={activeStep} className="">
                    {steps.map((step)=>(
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep===steps.length?<Confirmation/>:checkoutToken && <Form/>}
            </Paper>
        </main>
     </div>
    </>
  )
}

export default Checkout