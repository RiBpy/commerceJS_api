import React from 'react'
import { Container,Typography} from '@mui/material';
import CartTemplate from './CartTemplate';
import {Link} from "react-router-dom"
const Cart = ({cart,handleRemoveItem,handleCartQuantity,handleEmptyCart}) => {
 if(!cart.line_items) return "Loading..."
  return (
    <Container className='rounded-md py-4 px-4 top-0 right-0 '>
        <Typography className='font-semibold py-2' variant='h5'>Your Cart Items</Typography>
        {!cart.line_items.length?
        <div className='py-10 text-red-500'>
          <h6 className='font-semibold'>Sorry! Your cart is empty</h6>
          <Link to="/products"><button className="px-4 py-2 my-4 rounded-sm bg-green-300 text-black hover:bg-green-600 hover:text-white">Continue Shopping </button></Link>
          </div>
        :<CartTemplate 
        cart={cart}
        handleCartQuantity={handleCartQuantity}
        handleRemoveItem={handleRemoveItem}
        handleEmptyCart={handleEmptyCart}
        />}
    </Container>
  )
}

export default Cart