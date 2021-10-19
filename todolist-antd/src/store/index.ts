import { createStore } from "vuex";
import { itemData } from "../model/itemData";

export default createStore({
  state: {
    todoItem: "",
    todoList: [] as itemData[],
    all: true,
    active: false,
    completed: false,
  },
  getters: {
    //还未完成的todos
    active(state) {
      return state.todoList.filter((x) => x.status == "active");
    },
    //已经完成的todos
    completed(state) {
      return state.todoList.filter((x) => x.status == "completed");
    },
  },
  mutations: {
    addTodos(state) {
      if (state.todoItem) {
        const item: itemData = {
          id: new Date().getTime(),
          value: state.todoItem,
          status: "active",
        };
        state.todoList.push(item);
        state.todoItem = "";
      }
    },

    updateTodos(state, payload) {
      state.todoItem = payload.todoItem;
    },

    completeTodos(state, id) {
      state.todoList.forEach((element) => {
        if (element.id === id) {
          if (element.status !== "completed") {
            element.status = "completed";
          } else {
            element.status = "active";
          }
        }
      });
    },
    deleteTodos(state, id) {
      state.todoList = state.todoList.filter((x) => x.id !== id);
    },

    showTodos(state, type) {
      switch (type) {
        case "all":
          state.all = true;
          state.active = false;
          state.completed = false;
          break;
        case "active":
          state.all = false;
          state.active = true;
          state.completed = false;
          break;
        case "completed":
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
    },
  },
  actions: {},
  modules: {},
});
