<template>
  <div id="demo">
    <button @click="show = !show">toggle</button>

    <transition name="fade">
      <p v-if="show">hellw transition</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
