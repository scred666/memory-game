<template>
  <div @click="handler" :class="wrapperClasses">
    <div class="card__content">
      <div class="card__content-front"></div>
      <div :class="backSideClasses">
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
    difficult: {
      type: String,
      default: 'easy',
      required: true
    },
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
    wrapperClasses() {
      return {
        card: true,
        'card--clicked': this.isClicked,
        'card--solved': this.isSolved
      }
    },
    backSideClasses() {
      return ['card__content-back', `card__content-back--${this.difficult}`]
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
  +media((margin: (0: rem(4), 768: rem(5))))
  background-color: transparent
  +media((width: (0: rem(50), 768: rem(80))))
  +media((height: (0: rem(50), 768: rem(80))))
  +media((font-size: (0: rem(24), 768: rem(40))))
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
      background-color: $light
    &-back
      transform: rotateY(180deg)
      background-color: $green
      display: flex
      align-items: center
      justify-content: center
      line-height: 0
      &--medium
        background-color: $yellow
      &--hard
        background-color: $orange
      &--expert
        background-color: $deep-orange
      &--survival
        background-color: $red
  &--clicked, &--solved
    .card
      &__content
        transform: rotateY(180deg)
.fading-enter-active, .fading-leave-active
  transition: opacity .5s
.fading-enter, .fading-leave-to
  opacity: 0
</style>
