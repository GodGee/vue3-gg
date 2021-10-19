<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>

  <!-- composition -->
  <composition></composition>

  <!--  teleport ModuleButton -->
  <module-button></module-button>

  <!-- Emits-->
  <emits @click="onClick"></emits>

  <!-- 实例方法定义组件-->
  <comp></comp>

  <!-- v-model 的使用-->
  <!-- <template>
    <div @click="$emit('update:modelValue', modelValue + 1)">counter:{{ modelValue }}</div>
  </template>
  <script>
    import { reactive, ref } from 'vue'
    export default {
      props: {
        modelValue: {
          type: Number,
          default: 0,
        },
      },
    }
  </script>
  <style scoped></style> -->

  <!-- <v-model-test v-model="counter"></v-model-test> -->

  <!-- v-model 指定名称的使用-->
  <v-model-test v-model:counter="counter"></v-model-test>
  <!-- <v-model-test :counter="counter" @update:counter="counter=$event"></v-model-test> -->
  <!-- render api 渲染发生变化 -->
  <RenderTest v-model:counter="counter">
    <template v-slot:default>title</template>
    <template v-slot:content>content……</template>
  </RenderTest>

  <!-- 函数式组件 -->
  <functinal level="3">这是一个动态的元素</functinal>

  <!-- 异步组件 -->
  <AsyncComp></AsyncComp>

  <!-- 自定义指令 -->
  <p v-highLight="'green'">自定义指令</p>

  <!-- 动画 -->
  <transition-test></transition-test>

  <!-- 编程方式发送和监听事件 -->
  <button @click="sendMsg">mitt event</button>

  <todos></todos>
</template>

<script>
import { defineAsyncComponent, h } from 'vue'
import Composition from './Composition.vue'
import ModuleButton from './ModuleButton.vue'
import Emits from './Emits.vue'
import VModelTest from './VModelTest.vue'
import Functinal from './Functinal.vue'
import TransitionTest from './TransitionTest.vue'
import Todos from './Todos.vue'

// 事件派发和监听
import mitt from 'mitt'
export const emitter = mitt()

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Composition,
    ModuleButton,
    Emits,
    VModelTest,
    RenderTest: {
      props: {
        counter: {
          type: Number,
          default: 0,
        },
      },
      render() {
        // this.$slots.default()
        // this.$slots.content()
        // 内容分发时候 v-slot
        console.log(this.$slots)
        return h('div', [h('div', { onClick: this.onClick }, [`I am RenderTest: ${this.counter}`, this.$slots.default(), this.$slots.content()])])
      },
      methods: {
        onClick() {
          this.$emit('update:counter', this.counter + 1)
        },
      },
    },
    Functinal,
    AsyncComp: defineAsyncComponent(() => import('./NextPage.vue')),
    TransitionTest,
    Todos,
  },
  data() {
    return {
      count: 0,
      counter: 1,
    }
  },
  methods: {
    onClick() {
      console.log('click me')
    },
    sendMsg() {
      emitter.emit('someEvent', 'fooo')
    },
  },
  setup() {},
}
</script>
