module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/_variabless.scss";
        @import "@/assets/scss/_mixins.scss";
        `
      }
    }
  }
}