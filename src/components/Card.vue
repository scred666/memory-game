<template>
  <div class="card" @click="handler">
    {{ emoji }}
  </div>
</template>

<script>
export default {
  props: {
    emoji: {
      type: String,
      default: null,
      required: true
    },
    id: {
      type: String,
      default: null,
      required: true
    }
  },
  name: 'Card',
  methods: {
    handler() {
      console.log(this.id)
    }
  }
}
</script>

<style scoped lang="sass">
.card
  height: rem(40)
  width: rem(40)
  border-radius: rem(4)
  background: gray
  font-size: rem(20)
  display: flex
  align-items: center
  justify-content: center
</style>
