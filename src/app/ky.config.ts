import ky from 'ky'

export const kyApi = ky.create({
  prefixUrl: process.env.BACKEND_API_URL + '/rest',
})
