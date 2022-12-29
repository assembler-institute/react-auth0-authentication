import React, { useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Tooltip from '@mui/material/Tooltip'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import IconButton from '@mui/material/IconButton'
import { MessageContext } from '../context/MessageConext'

function PrivatePing () {
  const { setMessage } = useContext(MessageContext)
  const { getAccessTokenSilently } = useAuth0()

  const privatePing = async () => {
    try {
      const token = await getAccessTokenSilently()
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/private`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      if (data.error) {
        setMessage(data.error)
        return
      }
      setMessage(data.msg)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Tooltip title='Make Protected Request'>
      <IconButton aria-label='private request' onClick={privatePing}>
        <AdminPanelSettingsIcon />
      </IconButton>
    </Tooltip>
  )
}

export default PrivatePing
