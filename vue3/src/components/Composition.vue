<template>
  <p>{{ counter }}</p>
  <p>{{ doubleCounter }}</p>
  <p ref="desc"></p>
</template>
<script>
import { computed, onMounted, onUnmounted, reactive, ref, toRefs, watch } from 'vue'
export default {
  setup() {
    //counter相关 代码复用
    const { counter, doubleCounter } = useCounter()

    //msg 相关 单值响应
    const msg = ref('some message')

    const desc = ref(null)

    watch(counter, (val, oldVal) => {
      const p = desc.value
      p.textContent = `counter change from ${oldVal} to ${val}`
    })

    return { counter, doubleCounter, msg, desc }
  },
}

function useCounter() {
  const data = reactive({
    counter: 1,
    doubleCounter: computed(() => data.counter * 2),
  })

  let timer
  onMounted(() => {
    timer = setInterval(() => {
      data.counter++
    }, 1000)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })
  return toRefs(data)
}
</script>
<style lang="scss" scoped></style>
