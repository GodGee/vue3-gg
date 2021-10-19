# vite-ts-todolist 开发记录

> 版本信息：
>
> vite 2.4.4
>
> vue 3.0.5
>
> typescript 4.3.5
>
> npm install 安装依赖， npm run dev 启动项目，体验。

## 成品展示

![image-20210830155427560](https://gitee.com/heyhaiyon/upic/raw/master/uPic/image-20210830155427560.png)

## 开发思路

1. 拆分模块
2. 设计数据存储方式
3. 规范数据类型
4. 详细拆分各模块功能

## 知识点

### setup

```tsx
setup() {

  const Z:number = ref(0)

  const X = ()=>{
    //method
  }

  const function Y() {

  }

  // 需要在外面继续使用的值/方法，要用 return 返回
  return {
    Z,
    X,
    Y
  }
}
```

### [reactive](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive)——响应性基础 API

```ts
// 这里是一个用state={todosList: Array<ItemData>/ItemData[]} 解构,后面具体内容按照解构的类型
const state = reactive<{ todosList: Array<ItemData> }>({
  todosList: [],
  // todosList: [
  //   { id: 1, title: "张三", isCompleted: false },
  //   { id: 2, title: "李四", isCompleted: false },
  //   { id: 3, title: "瑞斯", isCompleted: false }
  // ]
});
```

### [toRefs](https://v3.cn.vuejs.org/api/refs-api.html#torefs)

```tsx
<div class="todosList">
    <Header :addPlan="addPlan"></Header>
    <List :todosList="todosList"></List>
    <Footer :todosList="todosList" :isCompletedAll="isCompletedAll" :clearCompleted="clearCompleted
    "></Footer>
  </div>

		return {
      // 将state中的所有属性转换为ref对象 ，用的时候直接使用属性名称即可
      ...toRefs(state),
      // todosList,
    };
```

### watch

```ts
// （监听的数据源，要执行的方法，配置监听的options）
watch(() => state.todosList, saveTodos, { deep: true });
```

### provide / inject——祖孙传递

```ts
// 祖 App.vue
const delPlan = (id: number) => {
  // console.log("删除");
  state.todosList.splice(id, 1);
};
// 传递出去
provide("delPlan", delPlan);

/*===================================================================*/
// 孙 Item.vue
// 通过 inject 拿到祖父传过来的方法
const delTodo: Function | undefined = inject("delPlan");

const del = (index: number) => {
  // console.log(index);
  if (window.confirm("确认删除吗？")) {
    if (typeof delTodo === "function") delTodo(index);
  }
};
```

### computed

```tsx
<div class="todoItem">
    <input class="checkbox" type="checkbox" v-model="isCompleted" />
    <!--    <input type="text" :readonly="true" v-model="todoItem.title">-->
    <span class="title">{{ todoItem.title }}</span>
    <button class="delButton" @click="del(index)">删除</button>
  </div>

const isCompleted = computed({
        // 通过 computed 的 get 实现 isCompleted 数据的绑定，
        get: () => {
          return props.todoItem.isCompleted;
        },
        // 通过 set 创建可写的 ref 对象 实现对状态的更改
        set: val => {
          if (typeof updateState === "function") updateState(props.todoItem, val);
        }
      }
    );
```

### as——类型强转

```tsx
props: {
  todoItem: {
    // 约束类型，使用as强转类型
    type: Object as () => ItemData,
    required: true
  },
  index: {
    type: Number
  }
```

### onMounted——生命周期

```tsx
// 挂载后读取本地数据，存入todosList
onMounted(() => {
  setTimeout(() => {
    state.todosList = readTodos();
    // console.log(state.todosList);
  }, 500);
});
```

### props

在`setup`内不能使用`this`，所以传递值通过`props`来传递，实现双向绑定，和 **React** 非常相似

```tsx
export default defineComponent({    name: "Footer",    props: {      todosList: {        // type: Array as ()=>ItemData[],        type: Array,        required: true      },      isCompletedAll: {        type: Function,        required: true      },      clearCompleted: {        type: Function,        required: true      }    },    setup(props) {      // reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。      const count = computed(() => {        return props.todosList.reduce((pre: number, todo: ItemData) => pre + (todo.isCompleted ? 1 : 0), 0);      });      // 是否全选操作      const isCheckedAll = computed({        get: () => {          // console.log(count)          return count.value > 0 && count.value === props.todosList.length;        },        set: val => {          props.isCompletedAll(val);        }      });      return {        count,        isCheckedAll      };    }  });
```

### interface——规范类型

```tsx
// 定义接口 ItemData ，约束传入的数据类型export interface ItemData {  id: number;  title: string;  isCompleted: boolean;}
```

### 存储数据的工具类

```tsx
import { ItemData } from "../model/ItemData";function saveTodos(todos: ItemData) {  localStorage.setItem("todos_key", JSON.stringify(todos));}function readTodos(): ItemData[] {  // console.log(JSON.parse(localStorage.getItem("todos_key") || "[]"))  return JSON.parse(localStorage.getItem("todos_key") || "[]");}export { saveTodos, readTodos };
```

## 遇到的问题

### 导入组件问题

1. 引入 vue 组件时，需要添加后缀名`.vue`，在 webStorm 修改设置

![image-20210827154737368](https://gitee.com/heyhaiyon/upic/raw/master/uPic/image-20210827154737368.png)

2. vue3 导入组件依然需要在 component 中注册

```vue
<template>
  <div>todolist <Header></Header> <List></List> <Footer></Footer></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default defineComponent({
  name: "App",
  components: { Header, List, Footer },
});
</script>
```

## 遗留问题

1. TS 报错

```ts
/** *  ! 报错问题 */watch(() => state.todosList, saveTodos, { deep: true });setup(props) {      // reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。      const count = computed(() => {        return props.todosList.reduce((pre: number, todo: ItemData) => pre + (todo.isCompleted ? 1 : 0), 0);      });}
```

![image-20210830154733763](https://gitee.com/heyhaiyon/upic/raw/master/uPic/image-20210830154733763.png)

![image-20210830154656719](https://gitee.com/heyhaiyon/upic/raw/master/uPic/image-20210830154656719.png)
