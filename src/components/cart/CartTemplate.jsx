import React from 'react'
import { Grid,Typography} from '@mui/material';
import CartItems from './CartItems';
import {Link} from "react-router-dom";
const CartTemplate = ({cart ,handleRemoveItem,handleCartQuantity,handleEmptyCart}) => {
  return (
    <div className='py-4 flex flex-row '>
        <Grid className='w-[60%]'>
          {cart.line_items.map((item)=>(
            <CartItems 
            item={item} 
            handleCartQuantity={handleCartQuantity}
            handleRemoveItem={handleRemoveItem}
            />
        ))}
      </Grid>
      <div className='px-4 w-[40%]'>
        <Typography className='' variant='h6'>
            Subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className='flex justify-between py-2'>
            <button className='bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded' type="button" onClick={handleEmptyCart}>Empty Cart</button>
            <Link to="/checkout"><button className='bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded' type="button">Check out</button></Link>
        </div>
      </div>
    </div>
  )
}

export default CartTemplate