import React from 'react'
import { Card, CardMedia, CardContent,CardActions, Typography,IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
const Product = ({product}) => {
    const {description,price,name,image}=product
  return (
    <div>
        <Card className='max-w-full min-w-[200px]'>
            <CardMedia className='pt-[120%] object-fill' image={image} title={name} />
            <CardContent className='felx justify-between py-2 px-1'>
                <div className=''>
                    <Typography variant='h5' className='mb-3'>
                        {name}
                    </Typography>
                    <Typography variant='h6' className='mb-3'>
                        {price}
                    </Typography>
                </div>
                <Typography variant='body3'  className=''>
                        {description}
                </Typography>
            </CardContent>
            <CardActions className='flex justify-end p-0'>
                <IconButton aria-label='Add To Cart' className='p-0'>
                    <AddShoppingCart className='p-0'/>
                </IconButton>
            </CardActions>
        </Card>
    </div>
  )
}

export default Product