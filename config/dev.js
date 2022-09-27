module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    devServer: {
      port: 9088,
      // allowedHosts: 'all',
      proxy: {
        '.do': {
          target: 'http://localhost:8082/',
          changeOrigin: false
          //
          // target: 'https://test2-portal.ydmap.cn/',
          // changeOrigin: true,
        }
      }
    }
  }
}
