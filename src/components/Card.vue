<template>
  <div @click="handler" :class="classes">
    <div class="card__content">
      <div class="card__content-front"></div>
      <div class="card__content-back">
        <transition name="fading">
          <span v-if="isSolved || isClicked">
            {{ card.emoji }}
          </span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => ({}),
      required: true
    },
    currentClickedCards: {
      type: Array,
      default: () => [],
      required: true
    },
    solvedCards: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  name: 'Card',
  data: () => ({}),
  methods: {
    handler() {
      if (!this.isClicked && !this.isSolved && !this.isDisabled) {
        this.$emit('choseCard', this.card)
      }
    }
  },
  computed: {
    classes() {
      return {
        card: true,
        'card--clicked': this.isClicked,
        'card--solved': this.isSolved
      }
    },
    isClicked() {
      return this.currentClickedCards.some(item => {
        return item.privateId === this.card.privateId
      })
    },
    isSolved() {
      return this.solvedCards.includes(this.card.publicId)
    },
    isDisabled() {
      return this.currentClickedCards.length === 2
    }
  }
}
</script>

<style scoped lang="sass">
.card
  background-color: transparent
  height: rem(80)
  width: rem(80)
  font-size: rem(40)
  perspective: rem(1000)
  cursor: pointer
  &__content
    position: relative
    width: 100%
    height: 100%
    text-align: center
    transition: .5s
    transform-style: preserve-3d
    &-front, &-back
      position: absolute
      width: 100%
      height: 100%
      -webkit-backface-visibility: hidden
      backface-visibility: hidden
      border-radius: rem(4)
    &-front
      background: $light
    &-back
      transform: rotateY(180deg)
      background: $green
      display: flex
      align-items: center
      justify-content: center
      line-height: 0
  &--clicked, &--solved
    .card
      &__content
        transform: rotateY(180deg)
.fading-enter-active, .fading-leave-active
  transition: opacity .5s
.fading-enter, .fading-leave-to
  opacity: 0
</style>
