import { NuxtAxiosInstance } from '@nuxtjs/axios'

interface AxiosApi {
  [key: string]: (
    axios: NuxtAxiosInstance,
    params?: object,
    id?: string | number,
    id2?: string | number
  ) => Promise<object | Array<object>>
}

function setHeader(axios: NuxtAxiosInstance) {
  const token = process.browser
    ? localStorage.getItem('access_token') || ''
    : ''
  axios.setToken(token, 'Token')
}

export default {
  // Auth
  login(axios, data) {
    axios.setToken(false)
    return axios.$post('auth/login', data)
  },
  getProfile(axios, data) {
    setHeader(axios)
    return axios.$get('profile/')
  },
} as AxiosApi
