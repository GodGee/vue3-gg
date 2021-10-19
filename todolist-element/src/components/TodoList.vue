<template>
    <div>
        <h1>todos</h1>
        <!-- <el-button autofocus>test!!!!</el-button> -->
        <input
            placeholder="what needs to be done?"
            v-model="todos"
            @keyup.enter="addTodos"
        />
        <div class="todoItems">
            <TodoItem
                v-for="(item, index) in showList"
                :key="index"
                :item="item"
            ></TodoItem>
        </div>
        <todo-bottom v-show="todoList && todoList.length>0"></todo-bottom>
        <!-- <todo-bottom></todo-bottom> -->
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoBottom from "./TodoBottom.vue";
import { useStore } from "vuex";
import { computed} from "vue";
export default {
    name: "TodoList",
    components: {
        TodoItem,
        TodoBottom,
    },
    setup() {
        const store = useStore();

        const todos = computed({
            get: () => store.state.todos,
            set: (value) => {
                store.commit("changeTodos", { todos: value });
            },
        });

        const showList = computed(() => {
            if(store.state.all){
                return store.state.todoList;
            }else if(store.state.active){
                return store.getters.active;
            }else if(store.state.completed){
                return store.getters.completed;
            }
        });

        const todoList = computed(() => {
            return  store.state.todoList;
        })

        const addTodos = () => {
            store.commit("addTodos");
        };

        return {
            todos,
            showList,
            todoList,
            addTodos,
        };
    },
};
</script>

<style scoped>
h1 {
    color: rgba(175, 47, 47, 0.15);
    font-size: 100px;
    font-weight: 100;
    margin-bottom: 10px;
}

input {
    width: 550px;
    height: 65px;
    display: block;;
    padding-left: 50px;
    font-size: 24px;
    color: #bfbfbf;
    outline: none;
    border: 1px solid #999;
    box-shadow: 5px 5px 5px #999;
}

.todoItems{
    width: 604px;
    display: block;
}
</style>