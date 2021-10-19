<template>
  <div class="wrapper item">
    <a-checkbox :checked="isCompleted" @change="onCheckChange">
      {{ todoItem.title }}</a-checkbox
    >
    <a-popconfirm
      title="Are you sure delete this todos?"
      ok-text="Yes"
      cancel-text="No"
      @confirm="(e) => confirm(e, index)"
      @cancel="cancel"
    >
      <a href="#">Delete</a>
    </a-popconfirm>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, inject } from "vue";
import { ItemData } from "../model/ItemData";
import { message } from "ant-design-vue";
const props = defineProps<{ todoItem: ItemData; index: Number }>();
const delTodos: Function | undefined = inject("delTodos");
const confirm = (e: MouseEvent, index: Number) => {
  if (typeof delTodos === "function") {
    delTodos(index);
    message.success("删除成功！");
  }
};

const cancel = (e: MouseEvent) => {};
const updateStatus: Function | undefined = inject("updateStatus");
const onCheckChange = (e: any) => {
  if (typeof updateStatus === "function") {
    updateStatus(props.todoItem, e.target.checked);
  }
};
const isCompleted = computed(() => {
  return props.todoItem.isCompleted;
});
</script>

<style scoped>
.item {
  padding: 12px;
}
</style>
