<template>
  <div class="win-message">
    <div class="win-message__title">You win!</div>
    <button @click="retry">retry</button>
  </div>
</template>

<script>
export default {
  name: 'WinMessage',
  methods: {
    retry() {
      this.$emit('retry')
    }
  }
}
</script>

<style scoped lang="sass">
.win-message
  &__title
    color: $green
    text-transform: uppercase
    font-size: rem(26)
</style>
