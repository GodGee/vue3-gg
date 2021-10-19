<template>
  <li :class="{ completed: todo.completed, editing: todo === editedTodo }">
    <!-- 绑定完成状态 -->
    <div class="view">
      <input type="checkbox" v-model="todo.completed" />
      <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
      <button @click="removeTodo(todo)">x</button>
    </div>

    <!-- 编辑待办 -->
    <edit-todo
      class="edit"
      v-model:todoTitle="todo.title"
      v-todo-focus="todo === editedTodo"
      @keyup.enter="doneEdit(todo)"
      @blur="doneEdit(todo)"
      @keyup.escape="cancelEdit(todo)"
    ></edit-todo>
  </li>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  // 输入
  props: {
    todo: {
      type: Object,
      required: true,
    },
    editedTodo: {
      type: Object,
    },
  },
  // 输出
  emits: ['remove-todo', 'update:edited-todo'],

  setup(props, { emit }) {
    const state = reactive({
      beforeEditCache: '', //缓存编辑前的title
    })

    function removeTodo(todo) {
      emit('remove-todo', todo) //派发方式
    }

    function editTodo(todo) {
      state.beforeEditCache = todo.title
      // state.editedTodo = todo //父组件
      emit('update:edited-todo', todo)
    }
    function cancelEdit(todo) {
      todo.title = beforeEditCache
      // state.editedTodo = null //父组件
      emit('update:edited-todo', null)
    }
    function doneEdit(todo) {
      // state.editedTodo = null //父组件
      emit('update:edited-todo', null)
    }

    return { ...toRefs(state), removeTodo, editTodo, cancelEdit, doneEdit }
  },
  directives: {
    'todo-focus': (el, { value }) => {
      if (value) {
        el.focus()
      }
    },
  },
}
</script>

<style>
.completed label {
  text-decoration-line: line-through;
}

.edit,
.editing .view {
  display: none;
}

.view,
.editing .edit {
  display: block;
}
</style>
