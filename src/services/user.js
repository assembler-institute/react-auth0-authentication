import Axios from 'axios'

export const updateUserImage = async (id, img, token) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({ image: img })
  })
  return response.json()
}

export const updateUserImage2 = async (id, image, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const bodyParams = {
    title: image?.replace('data:', '').replace(/^.+,/, '')
  }
  console.log(config)
  console.log(bodyParams)

  const response = await Axios.patch(`${process.env.REACT_APP_SERVER_URL}/user`, bodyParams, config)
  console.log(response)
}
