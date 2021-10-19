import { createStore } from 'vuex'

export default createStore({
    state: {
        todos: "",
        todoList: [],
        all: true,
        active: false,
        completed: false
    },
    mutations: {
        // //根据id找到对应的todos
        // findIndex(state, id) {
        //     for (let i = 0; i < state.todoList.length; i++) {
        //         if (state.todoList[i].id === id) {
        //             console.log(i);
        //             return i;
        //         }
        //     }
        //     return -1;
        // },

        //todos改变
        changeTodos(state, payload) {
            state.todos = payload.todos;
        },

        //完成todos
        completeTodos(state, id) {
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.todoList[i].id === id) {
                    if (state.todoList[i].state != "completed") {
                        state.todoList[i].state = "completed";
                    } else {
                        state.todoList[i].state = "active";
                    }
                }
            }
        },

        //删除todos
        deleteTodos(state, id) {
            state.todoList = state.todoList.filter((item) => item.id !== id);
        },

        //添加todos
        addTodos(state) {
            if (state.todos) {
                state.todoList.push({
                    id: new Date().getTime(),
                    value: state.todos,
                    state: "active",
                });
                state.todos = "";
            }
        },

        // //给todos添加id
        // getId() {
        //     return new Date().getTime();
        // }


        // showAll(state) {
        //     if (state.all == false) {
        //         state.all = true;
        //     }
        //     state.active = false;
        //     state.complete = false;
        // },

        // showActive(state) {
        //     if (state.active == false) {
        //         state.active = true;
        //     }
        //     state.all = false;
        //     state.complete = false;
        // },

        // showCompleted(state) {
        //     if (state.complete == false) {
        //         state.complete = true;
        //     }
        //     state.all = false;
        //     state.active = false;
        // },

        show(state, payload) {
            switch (payload.choice) {
                case 'all':
                    state.all = true;
                    state.active = false;
                    state.completed = false;
                    break;
                case 'active':
                    state.all = false;
                    state.active = true;
                    state.completed = false;
                    break;
                case 'completed':
                    state.all = false;
                    state.active = false;
                    state.completed = true;
                    break;
                default:
                    state.all = true;
                    state.active = false;
                    state.completed = false;
                    break;
            }
        }
    },

    actions: {},
    modules: {},
    getters: {
        //还未完成的todos
        active(state) {
            return state.todoList.filter((item) => item.state == 'active');
        },
        //以及完成的todos
        completed(state) {
            return state.todoList.filter((item) => item.state == 'completed');
        }
    }
})