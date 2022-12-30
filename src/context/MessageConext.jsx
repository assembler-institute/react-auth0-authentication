import React, { useState } from 'react'
import ImageConextProvider from './ImageContext'

export const MessageContext = React.createContext()
function MessageConextProvider ({ children }) {
  const [message, setMessage] = useState('')
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <ImageConextProvider>
        {children}
      </ImageConextProvider>
    </MessageContext.Provider>
  )
}

export default MessageConextProvider
