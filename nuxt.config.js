export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bde-faction',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Site web du BDE Informatique de l\'IUT de Paris ; Promo 2021 - 2022 Faction' },
      { name: 'format-detection', content: 'telephone=no' },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Bde_Faction' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.bde-faction.fr'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'BDE Informatique de l\'IUT de Paris'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Site web du BDE Informatique de l\'IUT de Paris ; Promo 2021 - 2022 Faction'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/assets/factionOG.jpg'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'www.bde-faction.fr' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.bde-faction.fr'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'BDE Informatique de l\'IUT de Paris'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Site web du BDE Informatique de l\'IUT de Paris ; Promo 2021 - 2022 Faction'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/assets/factionOG.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Bannière BDE Faction - IUT de Paris'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Space+Mono:wght@700&family=Material+Icons&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'materialize-css/dist/css/materialize.min.css',
    '@assets/css/global.scss'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  plugins: [{ src: '~/plugins/materialize.js', mode: 'client' }],

  pageTransition: "scale"
}
