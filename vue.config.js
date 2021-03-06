module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/demos/memory-game',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/helpers.sass"'
      },
      css: {
        sourceMap: true
      }
    }
  }
}
