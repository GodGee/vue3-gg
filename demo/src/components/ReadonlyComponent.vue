<template>
  <div>
    <button @click="click">reverse</button>
    <button @click="clickReadonly" style="margin-left: 20px">readonly++</button>
    <div style="margin-top: 20px">{{ original.count }}</div>
  </div>
</template>

<script>
import { reactive, readonly, watchEffect } from "vue";

export default {
  name: "ReadonlyComponent",
  setup() {
    const original = reactive({
      count: 0,
    });

    const copy = readonly(original);

    watchEffect(() => {
      console.log("copy: ", copy.count);
    });

    const click = () => {
      original.count++;
    };
    const clickReadonly = () => {
      copy.count++;
    };

    return { original, clickReadonly, click };
  },
};
</script>