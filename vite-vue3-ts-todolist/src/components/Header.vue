<template>
  <div class="header">
    <input
      class="input"
      type="text"
      v-model="oneThing"
      @keyup.enter="addThing"
      placeholder="输入一条代办事项，Enter键添加"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ItemData } from "../model/ItemData";

export default defineComponent({
  name: "Header",
  props: {
    addPlan: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const oneThing = ref("");

    // 新增一条todo
    function addThing() {
      // console.log(oneThing.value);
      const text: string = oneThing.value;
      if (!text.trim()) return;
      const todo: ItemData = {
        id: Date.now(),
        title: text.trim(),
        isCompleted: false,
      };
      props.addPlan(todo);
      oneThing.value = "";
    }

    return {
      oneThing,
      addThing,
    };
  },
});
</script>

<style lang="less" scoped>
.header {
  margin: 20px 0;
  padding-right: 10px;
  .input {
    width: 100%;
    height: 28px;
    lineheight: 28px;
    fontsize: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 10px;
  }
}
</style>
