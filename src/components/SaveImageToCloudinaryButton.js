import React, { useContext } from 'react'
import Tooltip from '@mui/material/Tooltip'
import CloudCircleIcon from '@mui/icons-material/CloudCircle'
import IconButton from '@mui/material/IconButton'
import { updateUserImage } from '../services/user'
import { useAuth0 } from '@auth0/auth0-react'
import { ImageContext } from '../context/ImageContext'

function SaveImageToCloudinaryButton () {
  const { getAccessTokenSilently } = useAuth0()
  const { image } = useContext(ImageContext)

  const handleUpload = async () => {
    const token = await getAccessTokenSilently()
    const response = await updateUserImage('63adcfe8425e2c04cb0d9e9d', image, token)
    console.log(response)
  }

  return (
    <Tooltip title='Save to Cloudinary'>
      <IconButton aria-label='upload image' component='label' onClick={() => handleUpload()}>
        <CloudCircleIcon />
      </IconButton>
    </Tooltip>
  )
}

export default SaveImageToCloudinaryButton
