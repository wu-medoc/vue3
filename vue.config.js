module.exports = {
  publicPath: '/vue3/',

  chainWebpack: config => {
    config.performance
      .maxAssetSize(1000000)
      .maxEntrypointSize(1000000)
  }
}
