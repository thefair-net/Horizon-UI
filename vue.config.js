const path = require('path')
module.exports = {
  publicPath: './',
  outputDir: 'docs',
  assetsDir: 'static',
  productionSourceMap: true,
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
      title: 'Horizon UI - web前端组件库',
      favicon: 'example/favicon.ico'
    }
  }
}
