import { auth } from '../firebaseConfig'

export const getAccessToken = async () => {
  return auth.currentUser.getIdToken()
}
