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
    <retry-btn @btnClicked="retry" />
  </div>
</template>

<script>
import { difficulties } from '@/utils'
import DifficultRadio from '@/components/controls/DifficultRadio'
import RetryBtn from '@/components/RetryBtn'
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
    },
    retry() {
      this.$emit('reshuffle')
    }
  },
  components: { RetryBtn, DifficultRadio },
  computed: {
    difficulties: () => difficulties
  }
}
</script>

<style scoped lang="sass">
.difficult-switcher
  margin: rem(20) rem(20) rem(15)
  +media((max-width: (0: calc(95vw + 8px), 1200: rem(960))))
  display: inline-flex
  flex-wrap: wrap
  align-items: center
  justify-content: center
  &__items

    display: flex
    align-items: center
    justify-content: center
    flex-wrap: wrap
    .retry
</style>
