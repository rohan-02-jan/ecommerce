import React from 'react'
import { Button, IconButton } from '@mui/material'
import  AddCircleOutlineIcon  from  '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const CartItem = ({ item, showButton }) => {
    const dispatch = useDispatch();

    const jwt = localStorage.getItem("jwt");

    //remove items from cart
    const handleRemoveCartItem = () => {
        const data = { cartItemId: item?.id, jwt};
        dispatch(removeCartItem(item.id));
    };

    //update the quantity of cart items
    const handleUpdateCartItem = (num) => {
        const data = {data:{quantity: item.quantity+num}, cartItemId: item?.id, jwt}
        dispatch(updateCartItem(data));
    }
    
  return (
    <div className='p-5 shadow-lg border rounded-md'>CartItem
        
        <div className='flex items-center'>

            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] '>
                <img className='w-full h-full object-cover object-top' 
                // src='https://rukminim1.flixcart.com/image/612/612/xif0q/sari/v/p/3/free-prathna-om-vastra-fab-unstitched-original-imaghmwuprfjubfn.jpeg?q=70' alt=''
                src={item?.product?.imageUrl}
                alt={item?.product?.category?.name}
                />
            </div>

            <div className='ml-5 space-y-1'>
                
                <p className='font-semibold '>{item?.product?.title}</p>
                <p className='opacity-70'>Size: {item?.size}</p>
                <p className='opacity-70 mt-2'>Seller: {item?.product?.brand}</p>
               
                <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                    <p className='font-semibold'>₹ {item?.product?.discountedPrice} </p>
                    <p className='opacity-60 line-through'>₹ {item?.product?.price} </p>
                    <p className='text-green-600 font font-semibold'>{item?.product?.discountPercent} % off</p>  
                </div>
                
            </div>
        </div>
        { showButton && <div className='lg:flex items-center lg:space-x-10 pt-4'>

            <div className='flex items-center space-x-2'>
                <IconButton 
                    onClick={() => handleUpdateCartItem(-1)} 
                    disabled={item?.quantity<=1}
                    color='primary' aria-label='add an alarm'>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'> {item?.quantity} </span>
                <IconButton 
                    onClick={() => handleUpdateCartItem(1)}
                    color='primary' aria-label='add an alarm' 
                    sx={{color:"RGB(145 85 250)"}}>
                        <AddCircleOutlineIcon/>
                </IconButton>
            </div>

            <div className='flex text-sm lg:text-base mt-5 lg:mt-0'> 
                <Button 
                    onClick={handleRemoveCartItem}
                    variant='text'
                    sx={{color:"RGB(145 85 250)"}}>Remove{" "}
                </Button> 
            </div>
            
        </div>}
    </div>
    
  )
};

export default CartItem;