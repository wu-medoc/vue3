const path = require('path')
const svgFilePaths = ['assets/svg'].map((v) => path.resolve(v))
const tagName = 'svg'

module.exports = {
  tagName,
  svgFilePath: svgFilePaths,
  svgoConfig: {},
  pathAlias: {},
  transformAssetUrls: {}
}
