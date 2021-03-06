<template>
  <div>
    <transition name="win">
      <win-message v-if="isGamePassed" @retry="startNewGame" />
    </transition>
    <div class="cards">
      <card
        v-bind="$attrs"
        :current-clicked-cards="currentClickedCards"
        :solved-cards="solvedCards"
        v-for="card in emojisToGame"
        :card="card"
        :key="card.privateId"
        @choseCard="choseCard"
      />
    </div>
  </div>
</template>

<script>
import { getRandomId, shuffleArr } from '@/utils'
import Card from '@/components/Card'
export default {
  props: {
    // emojisCount: {
    //   type: Number,
    //   default: 10,
    //   required: true
    // },
    emojis: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  name: 'Cards',
  data: () => ({
    currentClickedCards: [],
    solvedCards: [],
    isWinWindowShow: false
  }),
  components: {
    WinMessage: () => import('@/components/WinMessage'),
    Card
  },
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
    },
    emojis() {
      this.resetResults()
    }
  },
  methods: {
    choseCard(item) {
      const { publicId, privateId } = item
      this.currentClickedCards.push({ publicId, privateId })
    },
    startNewGame() {
      this.resetResults()
      this.$emit('reshuffle')
    },
    resetResults() {
      this.solvedCards = []
      this.currentClickedCards = []
    }
  },
  computed: {
    // emojisByDifficult() {
    //   return shuffleArr(this.emojis).slice(0, this.emojisCount)
    // },
    emojisToGame() {
      const duplicatedEmojis = this.emojis.flatMap(emoji => {
        const publicId = getRandomId()
        return [
          { publicId, emoji, privateId: getRandomId() },
          { publicId, emoji, privateId: getRandomId() }
        ]
      })
      return shuffleArr(duplicatedEmojis)
    },
    isGamePassed() {
      return this.emojisToGame.every(emoji => {
        return this.solvedCards.includes(emoji.publicId)
      })
    }
  }
}
</script>

<style scoped lang="sass">
.cards
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-items: center
  +media((max-width: (0: calc(95vw + 8px), 1200: rem(960))))
  margin: 0 auto
.win-enter-active, .win-leave-active
  transition: .5s
.win-enter, .win-leave-to
  -webkit-transform: scale(1.1)
  opacity: 0
  transform: scale(1.1)
</style>
