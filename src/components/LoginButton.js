import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton () {
  const { loginWithRedirect } = useAuth0()
  return (
    <>
      <Button
        onClick={() => loginWithRedirect()}
        type='submit'
        fullWidth
        variant='outlined'
        startIcon={<Avatar src='
              https://www.quintagroup.com/blog/blog-images/saml2/auth0.png/@@images/image.png'
                   />}
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In With Auth0
      </Button>
    </>

  )
}

export default LoginButton
