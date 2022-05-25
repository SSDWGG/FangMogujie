module.exports = {
  publicPath: './',
  //   assetsPublicPath: './',

  devServer: {
    host: '0.0.0.0', //只要使用localhost就会出现尺寸错乱
    port: 8080, //也可以在wenstorm里面修改
    disableHostCheck: true,

  },
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views",
      }
    }
  }
}
