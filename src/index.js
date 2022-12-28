import React from 'react'
import ReactDOM from 'react-dom/client'

import MessageConextProvider from './context/MessageConext'
import Router from './router/Router'

import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <MessageConextProvider>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin + '/home'}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      >
        <Router />
      </Auth0Provider>
    </MessageConextProvider>
  </React.StrictMode>
)
