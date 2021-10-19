<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- 传统写法 -->
  <p @click="$store.commit('add')">{{ $store.state.count }}</p>
  <!-- composition api 写法 -->
  <p @click="add">{{ count }}</p>

  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Todos></Todos>
  <router-view></router-view>

  <!-- <router-view v-slot="{ Component }">
    <keep-alive><component :is="Component"></component></keep-alive>
  </router-view> -->
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'
import Todos from './components/todoscomponents/Todos.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Todos,
  },
  setup() {
    const store = useStore()
    console.log('store: ', store)
    return {
      // count: store.state.count, //store.state 是proxy 响应式的
      ...toRefs(store.state),
      add() {
        store.commit('add')
      },
    }
  },
}
</script>
