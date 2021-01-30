<template>
  <div class="cards">
    <card
      :current-clicked-cards="currentClickedCards"
      :solved-cards="solvedCards"
      v-for="card in emojisToGame"
      :card="card"
      :key="card.privateId"
      @choseCard="choseCard"
    />
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
  data: () => ({
    currentClickedCards: [],
    solvedCards: []
  }),
  components: { Card },
  watch: {
    currentClickedCards() {
      if (this.currentClickedCards.length === 2) {
        const [card1, card2] = this.currentClickedCards
        if (card1.publicId === card2.publicId) {
          this.solvedCards.push(card1.publicId)
          this.currentClickedCards = []
        } else {
          setTimeout(() => {
            this.currentClickedCards = []
          }, 500)
        }
      }
    }
  },
  methods: {
    shuffleInitialEmojis() {
      return shuffleArr(emojis)
    },
    choseCard(item) {
      const { publicId, privateId } = item
      this.currentClickedCards.push({ publicId, privateId })
    }
  },
  computed: {
    emojisByDifficult() {
      return this.shuffleInitialEmojis().slice(0, this.emojisCount)
    },
    emojisToGame() {
      const duplicatedEmojis = this.emojisByDifficult.flatMap(emoji => {
        const publicId = getRandomId()
        return [
          { publicId, emoji, privateId: getRandomId() },
          { publicId, emoji, privateId: getRandomId() }
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
  grid-template-columns: repeat(auto-fill, rem(80))
  gap: rem(10)
</style>
