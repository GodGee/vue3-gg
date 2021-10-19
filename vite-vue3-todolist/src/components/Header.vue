<template>
  <div>
    <a-input
      class="input"
      v-model:value="todoItem"
      @keyup.enter="addTodoItem"
      placeholder="输入一条待办事项，Enter键添加"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from "vue";
import { ItemData } from "../model/ItemData";

// 增强的props类型定义：
// const props = defineProps<{
//   foo: string
//   bar?: number
// }>()
// const emit = defineEmit<(e: 'update' | 'delete', id: number) => void>()
const props = defineProps<{
  addTodos: Function;
}>();

const todoItem = ref("");
const addTodoItem = () => {
  const text: string = todoItem.value;
  if (!text.trim()) return;
  const todo: ItemData = {
    id: Date.now(),
    title: text.trim(),
    isCompleted: false,
  };
  props.addTodos(todo);
  todoItem.value = "";
};
</script>

<style scoped>
.input {
  width: 850px;
  height: 55px;
  display: block;
  padding-left: 50px;
  font-size: 24px;
  color: #bfbfbf;
  outline: none;
  border: 1px solid #999;
  box-shadow: 5px 5px 5px #999;
  margin-top: 10px;
}
</style>
