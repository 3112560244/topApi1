const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {

    proxy: {
      '/tools': { //这里你要设置在什么字符串中拦截代理，白话文网站最好设置com结尾后面的字符串
        target: 'http://39.105.0.57:8082', //里面设置为网站地址
        // ws: true,
        changeOrigin: true
      },

    }

  }
})


