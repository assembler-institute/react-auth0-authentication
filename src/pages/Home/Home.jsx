import Typography from '@mui/material/Typography'
import PublicPing from '../../components/PublicPing'
import PrivatePing from '../../components/PrivatePing'
import LogoutButton from '../../components/LogoutButton'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'

import Avatar from '@mui/material/Avatar'
import { useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { red } from '@mui/material/colors'
import { MessageContext } from '../../context/MessageConext'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../../App.css'
import AuthJWT from '../../components/AuthJWT'
import GetAlbumsButton from '../../components/GetAlbumsButton'

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
            alignItems: 'center'
          }}
        >

          <Card sx={{ maxWidth: 345 }}>
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
              <Typography variant='h4'>
                Auth0
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Message from Server: {message.length > 1 ? message : 'Pending...'}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <PublicPing />
              <PrivatePing />
              <LogoutButton />

            </CardActions>
            {/* JWT */}
            <CardContent>
              <Typography variant='h4'>
                JWT
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Message from Server: {message.length > 1 ? message : 'Pending...'}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <AuthJWT />
              <GetAlbumsButton />
            </CardActions>

          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Home
