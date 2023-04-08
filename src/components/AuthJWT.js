import Tooltip from '@mui/material/Tooltip'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import IconButton from '@mui/material/IconButton'
import { useContext } from 'react'
import { MessageContext } from '../context/MessageConext'

function AuthJWT () {
  const { setMessage } = useContext(MessageContext)
  const authentication = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'assembler@gmail.com',
          pass: '123456789'
        })
      })
      const data = await response.json()
      setMessage(data.data.user.email)
      window.localStorage.setItem('token', JSON.stringify(data.data.token))
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Tooltip title='Make Protected Auth'>
      <IconButton aria-label='private request' onClick={authentication}>
        <AdminPanelSettingsIcon />
      </IconButton>
    </Tooltip>
  )
}

export default AuthJWT
