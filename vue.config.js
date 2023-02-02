const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {

    proxy: {
      '/tools': { //这里你要设置在什么字符串中拦截代理，白话文网站最好设置com结尾后面的字符串
        // target: 'http://39.105.0.57:8082', //里面设置为网站地址
        target: 'https://zedq.me', //里面设置为网站地址

        // ws: true,
        changeOrigin: true,
      },



      // '/': { //这里你要设置在什么字符串中拦截代理，白话文网站最好设置com结尾后面的字符串
      //   // target: 'http://39.105.0.57:8082', //里面设置为网站地址
      //   // target: 'https://zedq.me', //里面设置为网站地址
      //   target: 'https://pdsapi.aliyundrive.com',
      //   changeOrigin: true, // 是否跨域
      //   secure: false, // 如果是https接口，需要配置这个参数
      //   // 突破host和origin的限制
      //   headers: {
      //     referer: 'https://y.qq.com/',
      //     origin: 'https://y.qq.com'
      //   }
      //   // ws: true,
      //   // changeOrigin: true
      // },

    }

  }
})


