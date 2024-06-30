import React , {useState } from 'react'
import { useStripe } from "@stripe/react-stripe-js";
import { baseURL } from '../../Components/Variables/Variables';
import axios from 'axios';

// On this page he create his account and submit his data

export const CreatePaymentAccount = () => {

    let randomNumber = Math.floor(Math.random() * 10 );
    const stripe = useStripe() ;
    const fullName = localStorage.getItem('firstName') + " " + localStorage.getItem('lastName')

    const [accountHolderName, setAccountHolderName] = useState(localStorage.getItem('firstName') + " " + localStorage.getItem('lastName'));
    const [accountNumber, setAccountNumber] = useState('00001234567890123456');
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [routingNumber, setRoutingNumber] = useState('AAAADZDZXXX');
    const [accountHolderType, setAccountHolderType] = useState('individual');

    const handleBank = async (event) => {
        event.preventDefault();
    
        const bankAccountDetails = {
            country: 'DZ',
            currency: 'dzd',
            account_holder_name: accountHolderName,
            account_holder_type: accountHolderType,
            routing_number: routingNumber,
            account_number: accountNumber,
        };
    
        stripe.createToken('bank_account', bankAccountDetails).then(({token, error}) => {
            if (error) {
              console.log(error)
            } else {

              console.log('Bank account token:', token.id);
              // Send the token to your server
              console.log(token)

              submitBankAccountToken(token.id);
            }
        })
      }

      const submitBankAccountToken = async (tokenId) => {
        // console.log('tokenId submitBankAccountToken', tokenId)
        const response = await axios.post(baseURL + '/api/payment/create-stripe-account',{
          token: tokenId,
          email: email,
          fullName
        })
        console.log('response', response)
      }

  return (
    <>
        <div className='textGradient my-8 primaryfont'>Don't forgot to click here to create account on stripe to easly retreive your income  </div>
        <button onClick={handleBank} className={'btn-gradient block w-3/4 mx-auto mt-5 capitalize'} ><span className='text-lg font-extrabold primaryfont block'>Create account on Stripe</span></button>

    </>
  )
}
