export default (apiClient) => {
  return (resource) => {
    return {
      index (token) {
        return apiClient.$get(`/${resource}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      },
      create (payload, token) {
        return apiClient.$post(`/${resource}`, payload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      },
      show (id, token) {
        return apiClient.$get(`/${resource}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      },
      update (payload, id, token) {
        return apiClient.$post(`/${resource}/${id}?_method=put`, payload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      },
      delete (id, token) {
        return apiClient.$delete(`/${resource}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      }
    }
  }
}
