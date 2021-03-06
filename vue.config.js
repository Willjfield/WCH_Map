module.exports = {
  devServer: {
    hot: false,
    liveReload: false
  },
  "configureWebpack": {
    "optimization": {
      "splitChunks": {
        "minSize": 10000,
        "maxSize": 250000
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
  "publicPath": "./",
  //publicPath: '\.\/',
  outputDir: 'build',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "WCH Map";
        return args;
      })
  }
}