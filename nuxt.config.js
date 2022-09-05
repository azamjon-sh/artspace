let development = process.env.NODE_ENV !== 'production'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'artspace',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      //{ name: 'theme-color', content: '#fff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.scss',
    //'~/assets/vue-slider.scss',
    {
      src: '@fancyapps/ui/dist/fancybox.css',
      lang: 'css',
    },
  ],

  // Plugins to run before rende ring page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/api',
    '@/plugins/helpers',
    '@/plugins/validationRules',
    {src: "~/plugins/fancy-apps.js", ssr: false},
    {src: "~/plugins/vue-360.js", ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
  ],
  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: process.env.apiURL,
        endpoints: {
          login: {
            url: '/login'
          },
          logout: {
            url: '/logout'
          }
        }
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    //baseURL: 'http://127.0.0.1:8000/api',
    baseURL: process.env.apiURL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    apiURL: process.env.apiURL,
    imageServerURL: process.env.imageServerURL
  }
}
