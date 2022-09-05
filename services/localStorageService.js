export default {
  setUserToken (token) {
    if (process.client) {

      localStorage.setItem('userToken', JSON.stringify(token))
    }
  },
  getUserToken () {

    if (process.client) {
      return JSON.parse(localStorage.getItem('userToken'))
    }
    return ''
  }
}
