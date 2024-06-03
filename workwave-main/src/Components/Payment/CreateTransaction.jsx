import React from 'react'
import { useStripe } from "@stripe/react-stripe-js";
import axios from 'axios';
import { baseURL } from '../../Components/Variables/Variables';

export const CreateTransaction = () => {

  const stripe = useStripe()

  const handleCheckout = async () => {

    // freelencer id
    const freelencerDetails = {
      id:'662146a6be275abc9c8932ae'
    }

    const projectId = '663d759e05a7a46617f85d2c'
 
    const response = await axios.post(baseURL + `/api/payment/create-stripe-checkout-session/${projectId}`,{
      id:freelencerDetails.id
    })
    const sessionId = response.data.sessionId;
    console.log('session id',sessionId)
    const { error } = await stripe.redirectToCheckout({
      sessionId
    });

    if (error) {
      console.log('redirection error',error);
    }
  }


  return (
    <>
      <div className='w-20 h-20'>Payment2</div>
      <button className='border border-blue-800 p-4 rounded-2xl  border-solid bg-slate-200' onClick={handleCheckout}> Make payment on stripe here</button>
    </>
   
  )
}
