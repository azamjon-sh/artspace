import helpers from '@/services/helpers'

export default (ctx, inject) => {
  inject('helpers', helpers)
}
