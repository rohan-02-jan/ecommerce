import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust'

const OrderCard = () => {
  return (
    <div className='p-5 shadow-lg shadow-gray hover:shadow-2xl border '>
        {/* OrderCard */}
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top ' src='https://rukminim1.flixcart.com/image/612/612/xif0q/dress/z/s/i/s-a1-zwerlon-original-imagn9uycxbhshur.jpeg?q=70' alt='' />
                   
                    <div className='ml-5 space-y-2'>
                        <p className='mb-2'>Women Stiched Floral Dress</p>
                        <p className='opacity-60 text-xs font-semibold'>Sixe: M</p>
                        <p className='opacity-60 text-xs font-semibold'>Color Black</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>₹1099</p>
            </Grid>

            <Grid item xs={4}>
               {true && <div>
                <p>
                <AdjustIcon sx={{width:"15 px", height:"15px"}} className='text-green-600 mr-2 text-sm' />
                    <span>
                        Delivered on March 03
                    </span>
                </p>
                <p className='text-xs'>
                    Your item has been delivered!
                </p>
               </div> }
                {false && <p>
                    <span>
                        Expected Delivery on Mar 03
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard