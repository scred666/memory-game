<template>
  <div class="cards">
    <card v-for="item in emojisToGame" :emoji="item.emoji" :id="item.id" :key="item.key" />
  </div>
</template>

<script>
import { emojis, getRandomId, shuffleArr } from '@/utils'
import Card from '@/components/Card'

export default {
  props: {
    emojisCount: {
      type: Number,
      default: 10,
      required: true
    }
  },
  name: 'Cards',
  components: { Card },
  methods: {
    shuffleInitialEmojis() {
      return shuffleArr(emojis)
    }
  },
  computed: {
    emojisByDifficult() {
      return this.shuffleInitialEmojis().slice(0, this.emojisCount)
    },
    emojisToGame() {
      const duplicatedEmojis = this.emojisByDifficult.flatMap(emoji => {
        const id = getRandomId()
        return [
          {
            id,
            emoji,
            key: getRandomId()
          },
          {
            id,
            emoji,
            key: getRandomId()
          }
        ]
      })
      return shuffleArr(duplicatedEmojis)
    }
  }
}
</script>

<style scoped lang="sass">
.cards
  display: grid
  grid-template-columns: repeat(auto-fill, rem(40))
  gap: rem(10)
</style>
