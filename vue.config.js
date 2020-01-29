module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/GlobalStyles/GlobalColors.scss"'
      },
      scss: {
        // Here we can use the newer SCSS flavor of Sass.
        // Note that there *is* a semicolon at the end of the below line
        prependData: '@import "@/GlobalStyles/GlobalColors.scss";'
      }
    }
  },
  publicPath: "/",
  transpileDependencies: ["vuetify"]
};
