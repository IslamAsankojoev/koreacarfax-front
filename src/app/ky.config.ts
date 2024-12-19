import ky from 'ky'

export const kyApi = ky.create({
  prefixUrl: `/rest`,
})
