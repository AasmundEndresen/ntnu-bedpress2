module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    devServer: {
      progress: false,
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-loader').loader('vue-loader-v16').end().use('vue-svg-loader').loader('vue-svg-loader')
  },
  assetsDir: 'assets'
}