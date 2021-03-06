<template>
  <div class="difficult-switcher">
    <div class="difficult-switcher__items">
      <difficult-radio
        v-for="item in Object.entries(difficulties)"
        :current-difficult="difficult"
        :item="item"
        :key="item[0]"
        @updateDifficult="updateDifficult"
      />
    </div>
  </div>
</template>

<script>
import { difficulties } from '@/utils'
import DifficultRadio from '@/components/controls/DifficultRadio'
export default {
  props: {
    difficult: {
      type: String,
      default: 'easy',
      required: true
    }
  },
  name: 'DifficultSwitcher',
  methods: {
    updateDifficult(difficult) {
      this.$emit('updateDifficult', difficult)
    }
  },
  components: { DifficultRadio },
  computed: {
    difficulties: () => difficulties
  }
}
</script>

<style scoped lang="sass">
.difficult-switcher
  margin: rem(20) rem(20) rem(15)
  +media((max-width: (0: 80vw, 1200: rem(960))))
  display: inline-block
  &__items

    display: flex
    align-items: center
    justify-content: center
    flex-wrap: wrap
</style>
