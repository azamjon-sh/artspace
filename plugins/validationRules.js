const validationRules = {
  required: v => (!!v || v === 0) || 'Заполните поле',
  email: v => (!v || /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)) || 'Неправильная почта',
}

export default (ctx, inject) => {
  inject('rules', validationRules)
}
