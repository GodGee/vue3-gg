<template>
  <div @click="$emit('update:counter', counter + 1)">counter:{{ counter }}</div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
  props: {
    counter: {
      type: Number,
      default: 0,
    },
  },
}
</script>
<style scoped></style>
