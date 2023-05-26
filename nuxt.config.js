
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'BEST US MOVING - NEW HOME IS WHERE YOUR STORY BEGINS' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Best US MOVING - NEW HOME IS WHERE YOUR STORY BEGINS' || process.env.npm_package_description }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicons/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/favicons/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/favicons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicons/favicon-16x16.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#319900' },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    '@/assets/styles/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-js-modal', mode: 'client' },
    { src: '~plugins/vue-scroll-to', mode: 'client' },
    { src: '~/plugins/vuelidate.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],
  toast: {
    theme: 'toasted-primary',
    position: 'top-right',
    duration: 5000
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
