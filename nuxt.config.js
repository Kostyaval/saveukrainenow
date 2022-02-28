const isDev = process.env.NODE_ENV === 'development'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '#SaveUkraineNow',
    htmlAttrs: {
      lang: 'en',
    },
    ...(!isDev && {
      modern: 'client',
    }),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&&display=swap',
        media: 'print',
        onload: "this.media='all'",
      },
    ],
  },

  pwa: {
    icon: true,
    workbox: false,
    manifest: {
      name: '#SaveUkraineNow',
      lang: 'en',
      useWebmanifestExtension: false,
      background_color: '#FFCE20'
    }
  },

  css: ['@/assets/styles/index.sass'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/pwa',
    isDev ? 'nuxt-storm' : '',
    '@nuxtjs/eslint-module',
  ],

  modules: ['@nuxt/content'],

  content: {},
  build: {},
}
