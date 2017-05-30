var path = require('path')
var postLoader = require.resolve('./assets/post-loader.js')
var { PostPlugin, generateMetaData } = require('./assets/post-plugin.js')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    babel: {
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    },
    extend (config, ctx) {
      for (var i = 0; i < config.module.rules.length; i++){
        if (config.module.rules[i].test.source === "\\.css$") {
          config.module.rules[i] = {
            test: /\.css$/,
            use: [ 'vue-style-loader', 'css-loader?modules' ],
            exclude: /(node_modules)/
          }
          break;
        }
      }
      config.module.rules.push({
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader' ],
        include: /(node_modules)/
      })
      config.module.rules.push({
        test: /\.md$/,
        use: [ 'json-loader', postLoader]
      })
      config.resolve.alias['nuxt-class-component'] = '~plugins/nuxt-class-component'
      config.resolve.alias['~posts'] = path.join(__dirname, 'posts')
      config.plugins.push(new PostPlugin())
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    'normalize.css/normalize.css',
    'bootstrap/dist/css/bootstrap-grid.min.css',
    '~assets/app.css'
  ],
  generate: {
    routes: function (callback) {
      var routes = generateMetaData().map(item => {
        return `/post/${item.name}`
      })
      callback(null, routes)
    },
    interval: 1
  }
}
