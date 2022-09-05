import createRepository from '~/services/api/Repository'

export default (apiClient) => {
  const resource = 'site'
  const repositoryWithAxios = createRepository(apiClient)
  const repository = repositoryWithAxios(resource)

  Object.assign(repository, {
    initSettings (token) {
      console.log(`/${resource}/init-settings`)

      let result = apiClient.$get(`/${resource}/init-settings`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      return result
    },
  })

  return repository
}
