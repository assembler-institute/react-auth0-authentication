import { useState, useContext } from 'react'
import { MessageContext } from '../../context/MessageConext'
import Tooltip from '@mui/material/Tooltip'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import IconButton from '@mui/material/IconButton'
import LogoutButton from '../../components/LogoutButton'
import PublicPing from '../../components/PublicPing'
import SaveImageToCloudinaryButton from '../../components/SaveImageToCloudinaryButton'
import PrivatePing from '../../components/PrivatePing'
import GetImageButton from '../../components/GetImageButton'
import { useAuth0 } from '@auth0/auth0-react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'

import { red } from '@mui/material/colors'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { updateUserImageWithFormData } from '../../services/user'
import '../../App.css'

const theme = createTheme()

function Home () {
  const { isLoading, user } = useAuth0()
  const { message } = useContext(MessageContext)

  const [image, setImage] = useState('')
  console.log(image)
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <ThemeProvider theme={theme}>

      <Container
        component='main'
        height='100vh'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >

          <Card sx={{ maxWidth: 345, border: '2px solid black' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe' src={user.picture} />
        }
              action={
                <IconButton aria-label='settings' />
        }
              title={user.name}
              subheader={user?.email}
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                {message.length > 1 ? message : 'Pending...'}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <PublicPing />
              <PrivatePing />
              <LogoutButton />
            </CardActions>
          </Card>

          <Card sx={{ width: 290, border: '2px solid black' }}>
            <CardHeader
              title='Upload Image using base64'

            />
            <CardActions disableSpacing sx={{ display: 'flex', alignContent: 'center' }}>
              <GetImageButton />
              <SaveImageToCloudinaryButton />
            </CardActions>
          </Card>
          <Card sx={{ width: 290, border: '2px solid black' }}>
            <CardHeader
              title='Upload Image using FormData'

            />
            <CardActions disableSpacing sx={{ display: 'flex', alignContent: 'center' }}>
              <Tooltip title='Upload New Image'>
                <IconButton aria-label='upload image' component='label'>
                  <input hidden accept='image/*' type='file' onChange={(e) => setImage(e.target.files[0])} />
                  <PhotoCamera />
                </IconButton>
              </Tooltip>
              <Tooltip title='Save to Cloudinary'>
                <IconButton aria-label='upload image' component='label' onClick={() => updateUserImageWithFormData(image)}>
                  <CloudUploadIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        </Box>

      </Container>
    </ThemeProvider>
  )
}

export default Home
