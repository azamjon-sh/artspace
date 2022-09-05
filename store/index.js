import localStorageService from '@/services/localStorageService'

export const strict = false

export const state = () => ({

})

export const mutations = {
  set(state, data) {
    state[data.property] = data.value
  },

}

export const actions = {
  set: (context, data) => {
    context.commit('set', {
      property: data.property,
      value: data.value
    });
  }
}

export const getters = {

}
