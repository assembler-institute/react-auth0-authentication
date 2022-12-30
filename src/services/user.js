
export const updateUserImage = async (id, img, token) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({ image: img })
  })
  return response.json()
}

export const updateUserImageWithFormData = async (file) => {
  // eslint-disable-next-line no-undef
  const formData = new FormData()
  formData.append('image', file)
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/upload/63adcfe8425e2c04cb0d9e9d`, {
    method: 'PATCH',
    body: formData
  })
  return response.json()
}
