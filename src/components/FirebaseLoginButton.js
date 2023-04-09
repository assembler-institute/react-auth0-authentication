import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { googleProvider } from '../firebaseConfig'

function FirebaseLoginButton () {
  const auth = getAuth()

  const loginWithPopup = async () => {
    const response = await signInWithPopup(auth, googleProvider)
    window.location.href = '/home'
    console.log(response)
  }

  return (
    <Button
      onClick={loginWithPopup}
      type='submit'
      fullWidth
      variant='outlined'
      startIcon={<Avatar src='
      https://cdn.icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61474.png'
                 />}
      sx={{ mt: 3, mb: 2 }}
    >
      Sign In With Auth0
    </Button>
  )
}

export default FirebaseLoginButton
