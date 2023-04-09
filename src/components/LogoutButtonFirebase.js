import React from 'react'

import Tooltip from '@mui/material/Tooltip'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import IconButton from '@mui/material/IconButton'
import { auth } from '../firebaseConfig'

function LogoutButtonFirebase () {
  const handleLogout = async () => {
    try {
      await auth.signOut()
      window.location.href = '/'
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Tooltip title='Logout'>
      <IconButton aria-label='share' onClick={handleLogout}>
        <ExitToAppIcon />
      </IconButton>
    </Tooltip>
  )
}

export default LogoutButtonFirebase
