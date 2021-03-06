<template>
  <div class="difficult-radio">
    <input
      class="input"
      type="radio"
      :value="difficult"
      v-model="computedDifficult"
      :id="`difficult--${difficult}`"
      name="difficult"
    />
    <label :for="`difficult--${difficult}`" :class="classes">
      {{ difficult }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Array,
      default: () => [],
      required: true
    },
    currentDifficult: {
      type: String,
      default: 'easy',
      required: true
    }
  },
  name: 'DifficultRadio',
  computed: {
    difficult() {
      const [key] = this.item
      return key
    },
    classes() {
      return ['label', `label--${this.difficult}`]
    },
    computedDifficult: {
      get() {
        return this.currentDifficult
      },
      set(val) {
        this.$emit('updateDifficult', val)
      }
    }
  }
}
</script>

<style scoped lang="sass">
.difficult-radio
  +media((min-width: (0: 50vw, 600: unset)))
  .input
    position: absolute
    display: none
    visibility: hidden
    opacity: 0
    pointer-events: none
    &:checked
      + .label
          color: $black
          background-color: $green
          &--medium
            background-color: $yellow
          &--hard
            background-color: $orange
          &--expert
            background-color: $deep-orange
          &--survival
            background-color: $red

  .label
    margin: 0 rem(10)
    color: $green
    padding: rem(10)
    cursor: pointer
    display: inline-flex
    border-radius: rem(4)
    font-size: rem(16)
    text-transform: uppercase
    font-weight: bold
    transition: .5s
    &--medium
      color: $yellow
    &--hard
      color: $orange
    &--expert
      color: $deep-orange
    &--survival
      color: $red
</style>
