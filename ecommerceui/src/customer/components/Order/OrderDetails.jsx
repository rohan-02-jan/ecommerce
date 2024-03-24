import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'


const OrderDetails = () => {
  return (
    <div className='px: 5 lg:px-20'>OrderDetails
      <div className='border shadow-md'>
          <h1 className='font-semibold text-xl py-6'>Delivery Address</h1>
          <AddressCard />
      </div>

      <div className='py-20'>
        <OrderTracker activeSteps={3} />
      </div>
      
      <Grid className='space-y-5' container>
        {[1,].map((item) => <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>

       
      <Grid item xs={6}>
        <div className='flex items-center space-x-4'>
          <img className='w-[5rem h-[5rem] object-cover object-top ' src='https://rukminim1.flixcart.com/image/612/612/xif0q/dress/z/s/i/s-a1-zwerlon-original-imagn9uycxbhshur.jpeg?q=70' alt='' />
          <div>
            <p className='space-y-2 ml-5 font-semibold'>Women Floral Stitched Dress</p>
            <p className='space-x-5 opacity-50 text-xs font-semibold'> 
              <span>Color: Pink</span>
              <span>Size: M</span>
            </p>
            <p className='opacity-70 text-sm'>Seller: Cellomer Fabrics</p>
            <p className=''>₹1099</p>
          </div>
        </div>
      </Grid>

      <Grid item>
        <Box sx={{color:deepPurple[500] }}>
          <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-2xl'/>
          <span>Rate and Review Product</span>
        </Box>
      </Grid>
      </Grid> )}
              
      </Grid>
    </div>
        )
    }

export default OrderDetails