import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Tooltip from '@mui/material/Tooltip'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import IconButton from '@mui/material/IconButton'

function LogoutButton () {
  const { logout } = useAuth0()
  return (
    <Tooltip title='Logout'>
      <IconButton aria-label='share' onClick={() => logout({ returnTo: window.location.origin })}>
        <ExitToAppIcon />
      </IconButton>
    </Tooltip>

  )
}

export default LogoutButton
