import { Alert, AlertTitle, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OrderTracker from '../Order/OrderTracker';
import { getOrderById } from '../../../State/Order/Action';
import { updatePayment } from '../../../State/Payment/Action';
import AddressCard from '../AddressCard/AddressCard';

const PaymentSuccess = () => {
    
    const [paymentId, setPaymentId] = useState();
    const [referenceId, setreferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const {orderId} = useParams(); 

        console.log("orderId ", orderId);
    
    const dispatch = useDispatch(); 
    const {order} = useSelector((store) => store);

        console.log("order ", order.order);

    useEffect(()=> {
        const urlParam = new URLSearchParams(window.location.search);

        setPaymentId(urlParam.get("razorpay_payment_id"));
        setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
    }, []);
    
    useEffect(()=> {
        if(paymentId){
        const data = {orderId, paymentId};

        dispatch(getOrderById(orderId));
        dispatch(updatePayment(data));
        }
    }, [orderId, paymentId]);

  return (
    <div>PaymentSuccess
        <div className='flex flex-col justify-center items-center'>

            <Alert
            variant='filled'
            severity='success'
            sx={{mb:6, width:"fit-content"}}
            >
                <AlertTitle>Payment Success</AlertTitle>
                Your order is successfully placed!
                
            </Alert>
        </div>

        <OrderTracker activeStep={1}/>

        <Grid container className='space-y-5 py-5 pt-20'>
            {order.order?.orderItem.map((item)=>  <Grid 
                container 
                item 
                className='shadow-xl rounded-md p-5'
                sx={{alignItems:"center" ,justifyContent:"space-between"}}
            >
                <Grid 
                    item 
                    xs={6}
                >
                    <div className='flex items-center'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src={item.product.imageUrl} alt='' />

                        <div className='ml-5 space-y-2'>
                            <p>{item.product.title}</p>
                            <div className='opacity-50 text-xs font-semibold space-x-5'>
                                <span>Color: {item.color} </span> 
                                <span>Size: {item.size} </span>
                            </div>
                            <p>Seller: {item.product.brand} </p>
                            <p>Price: ₹{item.price} </p>
                        </div>
                    </div>

                </Grid>
                <Grid item>
                    <AddressCard address={order.order?.shippingAddress} />
                </Grid>

            </Grid>)}

        </Grid>
    </div>
  )
}

export default PaymentSuccess;