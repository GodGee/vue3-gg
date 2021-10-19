<template>
    <div id="bottom">
        <span>{{ activeList.length }} items left</span>
        <div id="buttons">
            <el-button @click="showAll" :class="{active:all}">All</el-button>
            <el-button @click="showActive" :class="{active:active}">Active</el-button>
            <el-button @click="showCompleted" :class="{active:completed}">Completed</el-button>
            <!-- <el-button :autofocus="autofocus">test!!!!</el-button> -->
            <!-- <el-button loading>test!!!!</el-button> -->
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed} from "vue";
export default {
    setup() {
        const store = useStore();
        
        const activeList = computed(() => {
            return store.getters.active;
        });

        const all = computed(()=>{
            return store.state.all;
        })

        const active = computed(()=>{
            return store.state.active;
        })

        const completed = computed(()=>{
            return store.state.completed;
        })

        const showAll = ()=>{
            store.commit("show",{choice:"all"});
        }

        const showActive = ()=>{
            store.commit("show",{choice:"active"});
        }

        const showCompleted = ()=>{
            store.commit("show",{choice:"completed"});
        }
        return {activeList,showAll,showActive,showCompleted,all,active,completed};
    },
};
</script>

<style scoped>
#bottom {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #999;
    box-shadow: 5px 5px 5px #999;
    padding-left: 10px;
    padding-right: 10px;
}

.active{
    color:#8cc5ff;background-color:#ecf5ff;border-color:#d9ecff
}
</style>