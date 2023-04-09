import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'

import Avatar from '@mui/material/Avatar'
import { useContext } from 'react'

import { red } from '@mui/material/colors'
import { MessageContext } from '../../context/MessageConext'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../../App.css'
import LogoutButtonFirebase from '../../components/LogoutButtonFirebase'
import GetAlbumsButtonFirebase from '../../components/GetAlbumsButtonFirebase'

const theme = createTheme()

function Home () {
  const { message } = useContext(MessageContext)
  const user = {}
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
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe' src={user?.picture} />
        }
              action={
                <IconButton aria-label='settings' />
        }
              title={user?.name}
              subheader={user?.email}
            />

            {/* Fierbase */}
            <CardContent>
              <Typography variant='h4'>
                Firebase
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Message from Server: {message.length > 1 ? message : 'Pending...'}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <GetAlbumsButtonFirebase />
              <LogoutButtonFirebase />
            </CardActions>

          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Home
