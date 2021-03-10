module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath: '/vue3/',
  chainWebpack: config => {
    config.performance
      .maxAssetSize(1000000)
  }
}
