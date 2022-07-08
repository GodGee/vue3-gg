<template>
  <div>
    <button @click="submit">测试基础类型 {{ props.modelValue }}</button>
    <button @click="direct">测试引用类型 {{ props.user }}</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "propsTest",
  props: {
    modelValue: String,
    name: String,
    user: Object,
    info: Object,
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    console.log("props-text", props);
    console.log("props-ctx", context);

    // 使用 emit 修改
    const submit = () => {
      //   context.emit("update:modelValue", new Date()); // 基础类型需要使用 emit 来修改
      props.modelValue = new Date(); // 直接手动修改无效
    };

    // 使用 proxy 修改
    const user = props.user; // 可以直接获取，不需要使用 toRef
    const direct = () => {
      user.name = new Date();
    };
    return {
      submit,
      direct,
      props,
    };
  },
});
</script>
