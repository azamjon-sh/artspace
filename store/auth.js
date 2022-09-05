import localStorageService from '@/services/localStorageService'

export const state = () => ({
  userObject: null,
  token: localStorageService.getUserToken(),
})

export const mutations = {
  SET_USER_OBJECT (state, userObject) {
    state.userObject = userObject
  },
  SET_TOKEN (state, token) {
    state.token = token
  }
}

export const actions = {
  async login ({ commit }, data) {

    let result = {status: true}

    await this.$api.auth.login(data).then((data) => {

      data = data.data

      commit('SET_USER_OBJECT', data.user)
      commit('SET_TOKEN', data.token)

      localStorageService.setUserToken(data.token)

    })
      .catch(err => {

      if (err.response) {

        result.status = err.response.data.success
        result.message = err.response.data.message

      } else if (err.request) {
        // client never received a response, or request never left
      } else {
        // anything else
      }
    })

    return result

  },
  logout ({ commit, state }) {

    if (process.client) {
      this.$api.auth.logout(localStorageService.getUserToken()).then(() => {
        commit('SET_USER_OBJECT', null)
        commit('SET_TOKEN', '')
        localStorageService.setUserToken('')

        location.reload();
      })
    }

  },
  async registration ({ commit }, data) {

    let result = {status: true}

    await this.$api.auth.registration(data).then((data) => {

      result = data.data

    })
      .catch(err => {

        if (err.response) {

          result.status = err.response.data.success
          result.message = err.response.data.message
          result.errors = err.response.data.errors

        } else if (err.request) {
          // client never received a response, or request never left
        } else {
          // anything else
        }
      })

    return result
  },
  async profile ({ commit }, data) {

    let result = {status: true}

    await this.$api.auth.profile(localStorageService.getUserToken(), data).then((data) => {

      result = data.data

    })
      .catch(err => {

        if (err.response) {

          result.status = err.response.data.success
          result.message = err.response.data.message
          result.errors = err.response.data.errors

        } else if (err.request) {
          // client never received a response, or request never left
        } else {
          // anything else
        }
      })

    return result
  },
  loadUserObject ({ commit, state }) {
    if (process.client) {
      this.$api.auth.getUserObject(localStorageService.getUserToken()).then((data) => {
        data = data.data
        commit('SET_USER_OBJECT', data)
      })
    }
  }
}

export const getters = {
  isAuthorized (state) {
    return !!state.token
  }
}
