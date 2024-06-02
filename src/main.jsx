import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import PaymentIntegration from './utils/PaymentIntegration.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <PaymentIntegration>
          <GoogleOAuthProvider clientId="813094906764-igso5iobgpab3tgahkknsmllpjuu2tag.apps.googleusercontent.com">
            <App />
          </GoogleOAuthProvider>
        </PaymentIntegration>
      </BrowserRouter>
    </React.StrictMode>
)
