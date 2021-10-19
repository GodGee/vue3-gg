<template>
  <div class="footer">
    <a-checkbox :checked="isCheckedAll" @change="handleChecked">
      已完成{{ completedNum }}/全部{{ todos.length }}</a-checkbox
    >

    <a-button class="btn" type="primary" @click="deleteAllTodos">
      清除已完成待办事项
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { ItemData } from "../model/ItemData";
const completedNum = computed(() => {
  return props.todos.reduce(
    (pre: number, todo: ItemData) => pre + (todo.isCompleted ? 1 : 0),
    0
  );
});

const props = defineProps<{
  todos: ItemData[];
  isCompletedAll: Function;
  clearCompleted: Function;
}>();

const handleChecked = (e) => {
  props.isCompletedAll(e.target.checked);
};
const deleteAllTodos = () => {
  props.clearCompleted()
};

const isCheckedAll = computed(() => {
  return completedNum.value > 0 && completedNum.value === props.todos.length;
});
</script>

<style scoped lang="scss">
.footer {
  margin: 20px 0;
  font-size: 18px;
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn {
    margin-bottom: 10px;
  }
}
</style>
