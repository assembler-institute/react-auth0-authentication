import React, { useState } from 'react'

export const MessageContext = React.createContext()
function MessageConextProvider ({ children }) {
  const [message, setMessage] = useState('')
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  )
}

export default MessageConextProvider
