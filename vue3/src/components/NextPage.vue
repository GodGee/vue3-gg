<template>
  <div>这是一个异步组件</div>
</template>

<script>
import { emitter } from './HelloWorld.vue'
export default {
  mounted() {
    emitter.on('someEvent', (msg) => {
      console.log(msg)
    })
  },
}
</script>

<style></style>
