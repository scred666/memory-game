<template>
  <div class="difficult-radio">
    <input
      type="radio"
      :value="difficult"
      v-model="computedDifficult"
      :id="`difficult--${difficult}`"
      name="difficult"
    />
    <label :for="`difficult--${difficult}`" class="item__label">
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

<style scoped></style>
