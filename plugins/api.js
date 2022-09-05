import createRepository from '~/services/api/Repository'
import auth from '@/services/api/Auth'
import main from '@/services/api/Main'
import personal from '@/services/api/Personal'
import localStorageService from '@/services/localStorageService'

export default (ctx, inject) => {

  const apiClient = ctx.$axios.create({
    baseURL: process.env.apiURL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    }
  })

  /*apiClient.interceptors.response.use(response => response, (error) => {
    if (error.response.status === 401) {
      localStorageService.setUserToken('')
      location.reload()
    }

    return Promise.reject(error)
  })*/

  const repositoryWithAxios = createRepository(apiClient)

  const api = {
    auth: auth(apiClient),
    main: main(apiClient),
    personal: personal(apiClient),
  }

  inject('api', api)
}
