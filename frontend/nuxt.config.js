/*
 * @Date: 2020-11-13 20:02:33
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-11-24 20:54:01
 */
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'WHUzero_cup2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
	'assets/main.css',
	'ant-design-vue/dist/antd.css',
	'video.js/dist/video-js.css',
	'element-ui/lib/theme-chalk/index.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
	'@/plugins/antd-ui',
	'@/plugins/video',
	'@/plugins/element-ui',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [
          /^element-ui/,
        ],
}
}
