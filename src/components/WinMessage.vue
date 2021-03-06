<template>
  <div class="overlay">
    <div class="win-message">
      <div class="win-message__title">You win!</div>
      <retry-btn @btnClicked="retry" />
    </div>
  </div>
</template>

<script>
import RetryBtn from '@/components/RetryBtn'
export default {
  name: 'WinMessage',
  components: { RetryBtn },
  methods: {
    retry() {
      this.$emit('retry')
    }
  }
}
</script>

<style scoped lang="sass">
.overlay
  position: fixed
  top: 0
  left: 0
  height: 100vh
  width: 100vw
  display: flex
  justify-content: center
  align-items: center
  background: rgba(#000, .9)
  z-index: 1
.win-message
  display: flex
  align-items: center
  justify-content: center
  width: 90vw
  max-width: rem(400)
  +media((flex-direction: (0: column, 320: row)))
  &__title
    color: $green
    text-transform: uppercase
    font-size: rem(26)
    margin-right: rem(20)
    text-align: center
    +media((margin: (0: 0 0 rem(20), 320: 0 rem(20) 0 0)))
</style>
