<template>
  <button class="retry" @click="handler">
    <img src="@/assets/img/retry.svg" alt="retry" />
  </button>
</template>

<script>
export default {
  name: 'RetryBtn',
  methods: {
    handler() {
      this.$emit('btnClicked')
    }
  }
}
</script>

<style scoped lang="sass">
.retry
  background: none
  cursor: pointer
  outline: none
  border-radius: rem(4)
  height: rem(40)
  width: rem(40)
  box-shadow: none
  border: none
  display: flex
  justify-content: center
  align-items: center
  img
    max-width: 100%
</style>
