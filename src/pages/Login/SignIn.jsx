import * as React from 'react'
import Avatar from '@mui/material/Avatar'

import CssBaseline from '@mui/material/CssBaseline'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import LoginButton from '../../components/LoginButton'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import FirebaseLoginButton from '../../components/FirebaseLoginButton'

function Copyright (props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

const theme = createTheme()

export default function SignIn () {
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
        <CssBaseline />
        <Box
          sx={{
            marginTop: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>

          <LoginButton />
          <FirebaseLoginButton />

        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
