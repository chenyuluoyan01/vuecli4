module.exports = {
    // baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false,
    devServer: {
      open: true,
      port: 80,
      proxy: {
        '/api': {
          target: 'http://192.168.0.177',
        //   secure: false,
          changeOrigin: true,
          pathRewrite: { '^/api': '' }
        }
      },
      overlay: {
        errors: true,
        warnings: true
      }
    }
}