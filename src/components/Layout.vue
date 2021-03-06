<template>
  <section class="layout">
    <difficult-switcher
      :difficult="difficult"
      @updateDifficult="updateDifficult"
      @reshuffle="reshuffle"
    />
    <Cards :emojis="emojisByDifficult" :difficult="difficult" @reshuffle="reshuffle" />
  </section>
</template>

<script>
import { difficulties, emojis, shuffleArr } from '@/utils'
import Cards from '@/components/Cards'
import DifficultSwitcher from '@/components/DifficultSwitcher'
export default {
  name: 'Layout',
  data: () => ({
    difficult: 'easy',
    emojis: []
  }),
  components: { DifficultSwitcher, Cards },
  methods: {
    updateDifficult(difficult) {
      this.difficult = difficult
    },
    reshuffle() {
      this.emojis = shuffleArr(this.emojis)
    }
  },
  mounted() {
    this.emojis = shuffleArr(emojis)
  },
  computed: {
    difficulties: () => difficulties,
    emojisByDifficult() {
      return shuffleArr(this.emojis).slice(0, difficulties[this.difficult])
    }
  }
}
</script>

<style scoped lang="sass">
.layout
  min-height: 100vh
  background: $black
</style>
