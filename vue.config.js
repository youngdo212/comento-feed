module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_normalize.scss";
          @import "@/scss/_variables.scss";
        `
      }
    }
  }
};
