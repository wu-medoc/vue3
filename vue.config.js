module.exports = {
    publicPath: process.env.NODE_ENV === 'vue3'
      ? '/dist/'
      : './'
  }