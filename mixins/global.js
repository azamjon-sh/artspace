export default {
  methods: {
    pluralize (number, one, two, five) {
      number = Math.abs(number);
      number %= 100;
      if (number >= 5 && number <= 20) {
        return five;
      }
      number %= 10;
      if (number == 1) {
        return one;
      }
      if (number >= 2 && number <= 4) {
        return two;
      }
      return five;
    },
    formatPrice (data, cur) {
      let space = ' '

      if (cur == '%')
        space = ''

      let price = Number.prototype.toFixed.call(parseFloat(data) || 0, 0)

      return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + space + cur
    },
    getFilterUrlParams(filter, filterValues) {

      let path = ''

      for (let key in filter) {

        if (filter[key].type == 'range') {

          if (filterValues[filter[key].code][0] != filter[key].min || filterValues[filter[key].code][1] != filter[key].max) {
            path += '/' + filter[key].code + '-from-' + filterValues[filter[key].code].join('-to-')
          }

        } else if (filter[key].type == 'switch') {

          if (filterValues[filter[key].code] === true) {
            //selected[filter[key].code] = 1
          }
        } else {

          if (filterValues[filter[key].code].length) {
            path += '/' + filter[key].code + '-is-'
            path += filterValues[filter[key].code].join('-or-')
          }
        }
      }

      return path
    },
    getQueryParams(filter, filterValues) {

      let selected = {}


      for (let key in filter) {

        if (filter[key].type == 'range') {


          if (filterValues[filter[key].code][0] != filter[key].min || filterValues[filter[key].code][1] != filter[key].max) {
            selected[filter[key].code] = filterValues[filter[key].code].join('-')
          }

        } else if (filter[key].type == 'switch') {

          if (filterValues[filter[key].code] === true) {
            selected[filter[key].code] = 1
          }
        } else {

          if (filterValues[filter[key].code].length) {
            selected[filter[key].code] = filterValues[filter[key].code].join(',')
          }
        }
      }

      console.log('end')

      return selected
    },
    objectToFormData (object) {

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
  }
}
