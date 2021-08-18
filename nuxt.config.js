export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title    : 'nuxt-boilerplate',
    htmlAttrs: { lang: 'en' },
    meta     : [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description', name: 'description', content: '',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Red+Hat+Text:400,500&display=swap',
        rel : 'stylesheet',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/stylelint-module', { fix: true, quiet: true }],
    // uncomment for auto lint on save
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build           : { babel: { plugins: ['lodash'] } },
  serverMiddleware: [{ path: '/ping', handler: '~/server-middleware/ping-route.js' }],
}
