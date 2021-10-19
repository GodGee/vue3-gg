<template>
  <div class="home">
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "./TodoList.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    TodoList,
  },
});
</script>

<style lang="scss" scoped>
 
</style>
