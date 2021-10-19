<template>
    <todo-list id="todoList"></todo-list>
</template>

<script>
import TodoList from "./components/TodoList.vue";
export default {
    name: "App",
    components: {
        TodoList,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
#todoList{
    position:absolute;
    left:50%;
    transform: translateX(-50%);
}
</style>
