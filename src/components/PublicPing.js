import React, { useContext } from 'react'
import Tooltip from '@mui/material/Tooltip'
import PublicIcon from '@mui/icons-material/Public'
import IconButton from '@mui/material/IconButton'
import { MessageContext } from '../context/MessageConext'

function PublicPing () {
  const { setMessage } = useContext(MessageContext)
  const publicPing = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/public`)
      const data = await response.json()
      setMessage(data.msg)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Tooltip title='Make Unprotected Request'>
      <IconButton aria-label='public request' onClick={publicPing}>
        <PublicIcon />
      </IconButton>
    </Tooltip>
  )
}

export default PublicPing
