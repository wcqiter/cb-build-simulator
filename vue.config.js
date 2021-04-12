module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/cb-build-simulator' : '/',
  configureWebpack: {
    entry: [
      './src/main.js'
    ]
  }
}
