import { Grid } from '@mui/material'
import React from 'react'
import Product from './product/Product'
const Products = () => {
  const products=[
    {id:1 ,name:"Mobile", description:"Android Phone",price:"$500",image:"./slider/sam.png"},
    {id:2 ,name:"Laptop", description:"HP Pavillion ",price:"$800" ,image:"./slider/ip14.png"}
  ]
  return (
    <div className='mt-5'>
      <h2 className='font-bold ml-10 font-neutral-500'> All Products</h2>
        <Grid className='flex justify-center gap-4'>
             {products.map(product=>{
              return(
                <Grid className='xs-12 sm-6 md-4 lg-3' key={product.id}>
                <Product product={product}/>
                </Grid>
              )
             })}  
        </Grid>
    </div>
  )
}
export default Products