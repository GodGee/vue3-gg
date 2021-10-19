<template>
  <div class="home">
    <Header :addTodos="addTodos"></Header>
    <List :todos="todos"></List>
    <Footer
      :todos="todos"
      :isCompletedAll="isCompletedAll"
      :clearCompleted="clearCompleted"
    ></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { ItemData } from "./model/ItemData";
import {
  defineComponent,
  onMounted,
  reactive,
  watch,
  provide,
  computed,
} from "vue";
import { getTodos, saveTodos } from "./utils/localStorageUtils";

const state = reactive<{ todos: Array<ItemData> }>({ todos: [] });

const todos = computed(() => {
  return state.todos;
});

watch(() => state.todos, saveTodos, { deep: true });
onMounted(() => {
  setTimeout(() => {
    state.todos = getTodos();// 延迟500ms，否则加载本地todos_key undefined
  }, 500);
});
const addTodos = (todo: ItemData) => {
  state.todos.unshift(todo);
};
const delTodos = (id: number) => {
  state.todos.splice(id, 1);
};
const updateStatus = (todo: ItemData, val: boolean) => {
  todo.isCompleted = val;
};
const isCompletedAll = (val: boolean) => {
  state.todos.forEach((element) => {
    element.isCompleted = val;
  });
};
const clearCompleted = () => {
  state.todos = state.todos.filter((x) => !x.isCompleted);
};

provide("delTodos", delTodos);
provide("updateStatus", updateStatus);
</script>

<style>
.home {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
