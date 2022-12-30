import React, { useContext } from 'react'
import Tooltip from '@mui/material/Tooltip'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import IconButton from '@mui/material/IconButton'
import { ImageContext } from '../context/ImageContext'

function GetImageButton () {
  const { setImage } = useContext(ImageContext)

  const handleImageUpload = (image) => {
    transformImage(image)
  }

  const transformImage = (image) => {
    // eslint-disable-next-line no-undef
    const reader = new FileReader()
    if (image) {
      reader.onloadend = () => {
        const base64String = reader?.result
          ?.replace('data:', '')
          .replace(/^.+,/, '')
        setImage(base64String)
      }
      reader.readAsDataURL(image)
    } else {
      setImage('')
    }
  }

  return (
    <>
      <Tooltip title='Upload New Image'>
        <IconButton aria-label='upload image' component='label'>
          <input hidden accept='image/*' type='file' onChange={(e) => handleImageUpload(e.target.files[0])} />
          <PhotoCamera />
        </IconButton>
      </Tooltip>

    </>
  )
}

export default GetImageButton
