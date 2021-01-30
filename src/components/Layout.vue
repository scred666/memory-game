<template>
  <section class="layout">
    <h1>layout {{ difficult }}</h1>
    <difficult-switcher :difficult="difficult" @updateDifficult="updateDifficult" />
    <Cards :emojis-count="difficulties[difficult]" />
  </section>
</template>

<script>
import { difficulties } from '@/utils'
import Cards from '@/components/Cards'
import DifficultSwitcher from '@/components/DifficultSwitcher'
export default {
  name: 'Layout',
  data: () => ({
    difficult: 'easy'
  }),
  methods: {
    updateDifficult(difficult) {
      this.difficult = difficult
    }
  },
  components: { DifficultSwitcher, Cards },
  computed: {
    difficulties: () => difficulties
  }
}
</script>

<style scoped lang="sass">
.layout
  min-height: 100vh
  background: $black
</style>
