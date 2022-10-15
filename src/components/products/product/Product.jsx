import React from 'react'
import { Card, CardMedia, CardContent,CardActions, Typography,IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
const Product = ({product,addToCart}) => {
  return (
        <div className='max-w-[100%] overflow-x-hidden sm:my-4'>
            <Card className='sm:min-w-[650px] mx-8 md:mx-0 min-h-[525px]  lg:min-w-[200px] lg:min-h-[450px] md:w-[300px] mt-[4%]'>
                <CardMedia className='flex justify-center align-middle'  >
                    <img src={product.image.url} alt={product.name} className="w-[100%] h-[100%] md:h-80 md:w-80 lg:w-60 lg:h-60"/>
                </CardMedia>
                <CardContent className='felx justify-between py-2 px-1'>
                    <div className=''>
                        <Typography variant='h5' className='mb-3'>
                            {product.name}
                        </Typography>
                        <Typography variant='h6' className='mb-3'>
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography variant='body3'  className='' dangerouslySetInnerHTML={{__html:product.description}}/>
                            
                </CardContent>
                <CardActions className='flex justify-end p-0 ' onClick={()=>addToCart(product.id,1)}>
                    <IconButton aria-label='Add To Cart' className='p-0'>
                        <AddShoppingCart className='p-0 hover:text-black'/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
  )
}

export default Product