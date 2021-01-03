import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default {
  getProfile(axios: NuxtAxiosInstance) {
    return axios.$get('profile/')
  },
}
