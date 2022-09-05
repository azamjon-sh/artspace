export default (apiClient) => {
  return {
    prices (token) {
      return apiClient.$get('/site/personal/prices', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    },
    sales (token) {
      return apiClient.$get('/site/personal/sales', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    },
    sale (token, payload) {
      return apiClient.$post('/site/personal/set-sale', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    },
  }
}
