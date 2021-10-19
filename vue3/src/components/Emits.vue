<template>
  <div @click="$emit('click')">自定义事件</div>
</template>
<script>
export default {
  emits: ['click'], //自定义的事件，避免再次触发原生事件
  data() {
    return {}
  },
}
</script>
<style scoped></style>
