const path = require('path')
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    },
    resolve: {
      alias: {
        example: path.join(__dirname, 'example'),
        // lib: path.join(__dirname, 'lib'),
        // src: path.join(__dirname, 'src'),
      },
    },
  },
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'example/index.html',
      filename: 'index.html',
      title: 'vision'
    }
  }
}
