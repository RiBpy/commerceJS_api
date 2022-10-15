import { Grid } from '@mui/material'
import React from 'react'
import Product from './product/Product'
const Products = ({products,addToCart}) => {
  return (
    <div className='my-5 '>
      <h2 className='font-bold ml-10 py-5'> All Products</h2>
        <Grid className='flex flex-wrap justify-center gap-4 drop-shadow-lg'>
             {products.map(product=>{
              return(
                <Grid className='xs-12 sm-6 md-4 lg-3' key={product.id}>
                <Product product={product} addToCart={addToCart}/>
                </Grid>
              )
             })}  
        </Grid>
    </div>
  )
}
export default Products