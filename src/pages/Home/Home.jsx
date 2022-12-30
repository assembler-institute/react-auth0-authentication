import { useContext } from 'react'
import { MessageContext } from '../../context/MessageConext'

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
import IconButton from '@mui/material/IconButton'
import { red } from '@mui/material/colors'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import '../../App.css'

const theme = createTheme()

function Home () {
  const { isLoading, user } = useAuth0()
  const { message } = useContext(MessageContext)

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
            marginTop: 50,
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

          <Card sx={{ width: 240, border: '2px solid black' }}>
            <CardActions disableSpacing sx={{ display: 'flex', alignContent: 'center' }}>
              <GetImageButton />
              <SaveImageToCloudinaryButton />
            </CardActions>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Home
