<template>
  <div class="wrapper">
    <span>{{ activeList.length }} items left</span>
    <div>
      <a-button
        @click="handleClick('all')"
        class="item"
        :type="all ? 'primary' : ''"
        >All</a-button
      >
      <a-button
        @click="handleClick('active')"
        class="item"
        :type="active ? 'primary' : ''"
        >Active</a-button
      >
      <a-button
        @click="handleClick('completed')"
        class="item"
        :type="completed ? 'primary' : ''"
      >
        Completed</a-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useStore();

    const all = computed(() => {
      return store.state.all;
    });

    const active = computed(() => {
      return store.state.active;
    });

    const completed = computed(() => {
      return store.state.completed;
    });

    const activeList = computed(() => {
      return store.getters.active;
    });
    const handleClick = (type: string) => {
      store.commit("showTodos", type);
    };
    return { all, completed, active, activeList, handleClick };
  },
});
</script>

<style scoped lang="scss">
.item {
  margin-right: 8px;
}
</style>
