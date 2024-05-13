import React , {useState } from 'react'
import { useStripe } from "@stripe/react-stripe-js";
import { baseURL } from '../../Components/Variables/Variables';
import axios from 'axios';

// On this page he create his account and submit his data

export const CreatePaymentAccount = () => {

    let randomNumber = Math.floor(Math.random() * 10 );
    const stripe = useStripe() ;

    const [accountHolderName, setAccountHolderName] = useState(localStorage.getItem('firstName') + " " + localStorage.getItem('lastName'));
    const [accountNumber, setAccountNumber] = useState('0000123456789012345' + randomNumber);
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
          email: email
        })
        console.log('response', response)
      }

  return (
    <>
        <div className='text-xl p-10 text-center'>Creating a Payment account for the freelancer </div>
        <button className='border border-blue-800 p-4 rounded-2xl  border-solid bg-slate-200' onClick={handleBank}> Create account</button>
    </>
  )
}
