import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PEcqkLMQ4hmmuZWoDRX7jh9XGNQX6ALkZp9naKNXEUnwcVni5H5P4G10k5M5rCXspX4k70iVeq4OJQRDAQqKku600sIkzY1WG')

 const PaymentIntegration = ({children}) => {
  return (
    <div>
        <Elements stripe={stripePromise}>
            {children}
        </Elements>
    </div>
  )
}

export default PaymentIntegration ;
