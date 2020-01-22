module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/GlobalStyles/GlobalColors.scss";`
      }
    }
  },
  devServer: {
    https: true
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/Rocket/'
      : '/'
  // Using only for dev "Access-Control-Allow-Origin"
  //devServer: {
  //   proxy: 'http://10.1.4.33:8080',
  // }
};
