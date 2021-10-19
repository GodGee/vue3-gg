<template>
  <div>
    <h1>todos</h1>
    <a-input
      class="input"
      v-model:value="todoItem"
      @keyup.enter="addTodoItem"
      placeholder="what needs to be done?"
    />
  </div>
  <todo-item
    v-for="(item, index) in showList"
    :key="index"
    :item="item"
  ></todo-item>
  <todo-bottom v-show="todoList && todoList.length > 0"></todo-bottom>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import TodoBottom from "@/components/TodoBottom.vue";
import TodoItem from "@/components/TodoItem.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "TodoList",
  components: {
    TodoBottom,
    TodoItem,
  },
  setup() {
    const store = useStore();
    // 增加待办事项
    const todoItem = computed({
      get: () => store.state.todoItem,
      set: (value) => {
        store.commit("updateTodos", { todoItem: value });
      },
    });
    const addTodoItem = () => store.commit("addTodos");
    // 待办事项列表
    const showList = computed(() => {
      if (store.state.all) {
        return store.state.todoList;
      } else if (store.state.active) {
        return store.getters.active;
      } else {
        return store.getters.completed;
      }
    });

    const todoList = computed(() => {
      return store.state.todoList;
    });
    return { todoItem, showList, todoList, addTodoItem };
  },
});
</script>

<style scoped lang="scss">
h1 {
  color: rgba(175, 47, 47, 0.15);
  font-size: 100px;
  font-weight: 100;
  margin-bottom: 10px;
  text-align: center;
}
.input {
  width: 550px;
  height: 65px;
  display: block;
  padding-left: 50px;
  font-size: 24px;
  color: #bfbfbf;
  outline: none;
  border: 1px solid #999;
  box-shadow: 5px 5px 5px #999;
}
</style>
