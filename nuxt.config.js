// import colors from 'vuetify/es5/util/colors'
// import en from '../locales/en.json'
// import fr from '../locales/fr.json'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - emenu',
    title: 'WhatsApp Commerce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style1.css',
    '@/assets/css/style2.css',
    '@/assets/css/style3.css',
    '@/assets/css/style4.css',
    '@/assets/css/style5.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [  
    '~plugins/animate_number.client.js',
    '~plugins/vuescrollactive.js',
    "~/plugins/i18n.js",
    "~/plugins/geocoder.client.js",
    '@/plugins/phone-input',

    // "~/plugins/vue2-google-maps.js",
    // "~/plugins/transition.js", 
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    
    // {
    //   vueI18nLoader: true,
    //   locales: ['en', 'fr'],
    //   defaultLocale: 'en',
    //    locales: [
    //     {
    //        code: 'en',
    //        name: 'English'
    //     },
    //     {
    //        code: 'fr',
    //        name: 'Français'
    //     }
    //   ],
    //   vueI18n: i18n
    // }
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // 'nuxt-i18n'

  ],
  // i18n: {
  //   vueI18nLoader: true,
  //   locales: ['en', 'fr'],
  //   defaultLocale: 'en',
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //     messages: {en,fr}
  //   }
  // },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // Set the baseURL to JSONPlaceholder API
    // baseURL: 'https://cp.akcredits.com/'
    // baseURL: 'https://formtest.lkmng.com/'
    baseURL: 'https://cp.emenu.com.my/'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          // primary: colors.blue.darken2,
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
          primary: '#1976D2',
          accent: '#37474F',
          secondary: '#FF8F00',
          info: '#26A69A',
          warning: '#FFC107',
          error: '#FF6D00',
          success: '#00E676'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
 
  router:{
    routes:[
      {path: ':merchant/:pid', component: '_merchant/_pid'}
    ]
  }
  
}

