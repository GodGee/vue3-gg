<template>
    <div>
        <input type="checkbox" :class="{checkbox:true,notShow:active}" @click="completeTodos(item.id)" :checked="item.state=='completed'"/>
        <span :class="{isCompleted:item.state=='completed'}"  @click="completeTodos(item.id)">{{item.value}}</span>
        <el-button icon="el-icon-close" circle @click="deleteTodos(item.id)"></el-button>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed} from "vue";
export default {
    name: "TodoItem",
    props: ["item"],
    setup(){
        const store = useStore();
        const deleteTodos = (id) => {
            console.log("点击删除");
            store.commit("deleteTodos", id);
        }; 
        const completeTodos = (id) => {
            store.commit("completeTodos", id);
        };
        const active = computed(()=>{
            return store.state.active;
        })
        return{
            deleteTodos,
            completeTodos,
            active
        }
    }
};
</script>

<style scoped>
div {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #999;
    box-shadow: 5px 5px 5px #999;
}
.el-button {
    margin-left: 10px;
}
.isCompleted {
    text-decoration: line-through;
    color: #d9d9d9;
}

span {
    display: inline-block;
    width: 80%;
}

.checkbox {
    width: 10%;
    border-radius: 100%;
}

.notShow{
    opacity: 0;
}
</style>