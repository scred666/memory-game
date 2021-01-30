<template>
  <div>
    <difficult-radio
      v-for="item in Object.entries(difficulties)"
      :current-difficult="difficult"
      :item="item"
      :key="item[0]"
      @updateDifficult="updateDifficult"
    />
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

<style scoped></style>
