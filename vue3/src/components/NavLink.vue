<template>
  <div :class="{ active: isActive }" @click="navigate">{{ route.name }}</div>
</template>

<script>
import { RouterLink, useLink } from 'vue-router'
export default {
  props: {
    ...RouterLink.props, //扩展RouterLink属性
    inactiveClass: String, //外部传递过来的
  },
  setup(props) {
    // 获取RouterLink的内部属性和方法
    const { route, href, isActive, isExactActive, navigate } = useLink(props)
    console.log('navigate: ', navigate)
    console.log('isExactActive: ', isExactActive)
    console.log('isActive: ', isActive)
    console.log('href: ', href)
    console.log('route: ', route)
    return { route, isActive, navigate }
  },
}
</script>

<style scoped>
.active {
  background: green;
}
</style>
