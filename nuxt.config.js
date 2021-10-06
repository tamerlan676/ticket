export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'Чехлы на все модели мобильных телефонов',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'yandex-verification', content: '9ac7e9c7fbb3c9ff' },
      { name: 'google-site-verification', content: 'hwlTnA5DEl3i12K8bB_MaFVkF3dBSsmjjifvmJF1PJg' },
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      {rel: 'stylesheet', type: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
    '~/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/sitemap',
      {
        path: '/sitemap.txt',
      },
      '@nuxtjs/yandex-metrika',
      {
        id: '84011974',
        webvisor: true,

      }]

    ],
  build: {
  }
}
