export default (apiClient) => {
  return {
    login (payload) {
      return apiClient.$post('/login', payload)
    },
    logout (token) {
      return apiClient.$post('/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    },
    registration (payload) {
      return apiClient.$post('/registration-' + payload.type, payload)
    },
    profile (token, payload) {
      return apiClient.$post('/site/profile-' + payload.type, payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    },
    getUserObject (token) {

      return apiClient.$get('/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  }
}
