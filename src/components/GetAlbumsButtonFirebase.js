import { useContext } from 'react'
import Tooltip from '@mui/material/Tooltip'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import IconButton from '@mui/material/IconButton'
import { MessageContext } from '../context/MessageConext'
import { getAccessToken } from '../helpers/getAccesToken'

function GetAlbumsButtonFirebase () {
  const { setMessage } = useContext(MessageContext)

  const getAlbumsTotal = async () => {
    const token = await getAccessToken()
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/album`, {
        headers: {
          Authorization: `Barear ${token}`
        }
      })
      const data = await response.json()
      setMessage(`There are ${data.data.length} albums in total`)

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Tooltip title='Get All Albums Total'>
      <IconButton aria-label='private request' onClick={getAlbumsTotal}>
        <LibraryMusicIcon />
      </IconButton>
    </Tooltip>
  )
}

export default GetAlbumsButtonFirebase
