<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
import Layout from '@/components/Layout'
export default {
  name: 'App',
  components: { Layout }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap')
body
  margin: 0
#app
  font-family: 'JetBrains Mono', monospace
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  min-height: 100vh
</style>
