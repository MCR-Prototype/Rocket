module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/GlobalStyles/GlobalColors.scss";`
      }
    }
  },
  // Using only for dev "Access-Control-Allow-Origin"
  //devServer: {
  //   proxy: 'http://10.1.4.33:8080',
  // }
};
