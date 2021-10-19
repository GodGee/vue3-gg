<template>
  <div>
    <!-- 新增todo -->
    <!-- 默认 -->
    <!-- <edit-todo v-model="newTodo" @keyup.enter="addTodo" autofocus placeholder="新增今日待办" autocomplete="off"></edit-todo> -->
    <!-- 自定义属性名 -->
    <edit-todo v-model:todoTitle="newTodo" @keyup.enter="addTodo" autofocus placeholder="新增今日待办" autocomplete="off"></edit-todo>

    <!-- todo列表 -->
    <!-- 封装组件，理清输入，输出是什么 -->
    <!-- 输入 todo、editedTodo 父子间组件通信 -->
    <!-- 输出 todo 删除、 edited-todo 更新事件  -->
    <ul>
      <todo-item v-for="todo in filterdTodos" :key="todo.id" :todo="todo" v-model:edited-todo="editedTodo" @remove-todo="removeTodo"></todo-item>
    </ul>

    <!-- 过滤 -->
    <Filter :items="filterItems" v-model="visibility"></Filter>

    <!-- 回退到dashboard -->
    <button @click="backToDash">backtodash</button>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import TodoItem from './TodoItem.vue'
import Filter from './Filter.vue'
import { useTodos } from './useTodos'
import { useFilter } from './useFilter'

export default {
  components: { TodoItem, Filter },
  setup() {
    const todoState = reactive({
      newTodo: '',
      editedTodo: null, //正在编辑
    })

    const { todos, addTodo, removeTodo } = useTodos(todoState)
    const filterState = useFilter(todos)

    // 获取路由器实例
    const router = useRouter()
    function backToDash() {
      router.push('/')
    }
    // route是响应式的，可监控其变化
    const route = useRoute()
    watch(
      () => route.query,
      (query) => {
        console.log('query: ', query)
      }
    )
    // 路由守卫
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm('你确定要走吗？')
      if (!answer) {
        return false
      }
    })

    return { ...toRefs(todoState), ...toRefs(filterState), todos, addTodo, removeTodo, backToDash }
  },
}
</script>

<style scoped></style>
