function objectToFormData (object) {
  const formData = new FormData()
  Object.keys(object).forEach((key) => {
    let value = object[key]
    if (value === false) {
      value = 0
    } else if (value === true) {
      value = 1
    }
    if (!Array.isArray(value)) {
      formData.append(key, value ?? '')
    } else if (value.length) {
      value.forEach(value => formData.append(`${key}[]`, value))
    }
  })
  return formData
}
function roleAccess(to, user) {
  if (!Array.isArray(to)) {
    to = [to]
  }
  for (let key in to) {
    if (user != undefined && user.roles != undefined && user.roles.length) {
      for (let k in user.roles) {
        if (to[key] == user.roles[k].code) {
          return true
        }
      }
    }
  }
  return false
}

export default {
  objectToFormData,
  roleAccess
}

