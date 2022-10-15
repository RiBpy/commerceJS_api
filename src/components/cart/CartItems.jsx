import React from 'react'
import { Card ,Typography} from '@mui/material';
const CartItems = ({item,handleRemoveItem,handleCartQuantity}) => {
  return (
    <div className=''>
        <Card item xs={12} sm={4} key={item.id} className="px-4 sm:px-8">
            <div className='sm:px-2'>
                <img src={item.image.url} alt={item.name} className="w-[10%] h-[10%]" />
                <div className='flex justify-between'>
                <h5>{item.name}</h5>
                <h6>{item.line_total.formatted_with_symbol}</h6>
                </div>
                <div className='flex justify-between '>
                    <div className='flex items-center'>
                    <button className='w-8 rounded-sm bg-slate-300 border-slate-500 drop-shadow-md hover:bg-slate-800 hover:text-white' onClick={()=>handleCartQuantity(item.id,item.quantity+1)}>+</button>
                    <Typography className="px-2">{item.quantity}</Typography>
                    <button className='w-8 rounded-sm bg-slate-300 border-slate-500 drop-shadow-md hover:bg-slate-800 hover:text-white ' onClick={()=>handleCartQuantity(item.id,item.quantity-1)}>-</button>
                    </div>
                    <button className="bg-red-500 text-white px-4 rounded-sm drop-shadow-md my-4 hover:bg-red-700"onClick={()=>handleRemoveItem(item.id)}>Remove</button>
                </div> 
              </div>
        </Card>
        <hr className="h-1" />
    </div>
  )
}

export default CartItems