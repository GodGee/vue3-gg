<template>
  <div class="wrapper">
    <a-checkbox
      :checked="item.status === 'completed'"
      @click="completeTodos(item.id)"
    ></a-checkbox>
    <span :class="{isCompleted:item.status=='completed'}">{{ item.value }}</span>
    <a-button shape="circle" @click="deleteTodos(item.id)">
      <template #icon> <MinusOutlined /></template>
    </a-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { MinusOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "TodoItem",
  props: ["item"],
  components: {
    MinusOutlined,
  },
  setup() {
    const store = useStore();

    const completeTodos = (id: number) => {
      store.commit("completeTodos", id);
    };
    const deleteTodos = (id: number) => {
      store.commit("deleteTodos", id);
    };
    return { completeTodos, deleteTodos };
  },
});
</script>

<style scoped lang="scss">
.isCompleted {
    text-decoration: line-through;
    color: #d9d9d9;
}</style>
