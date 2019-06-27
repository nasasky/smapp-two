module.exports = {

  publicPath: '/',

  devServer: {
    disableHostCheck: true,
    port: 80,

    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://192.168.0.18/api',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }

  }

}
