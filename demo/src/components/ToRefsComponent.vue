<template>
  <div style="border: 2px solid blue; margin-top: 8px">
    <button @click="handelReverse">reverse</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "ToRefsComponent",
  setup() {
    const state = reactive({
      message: "Hello GFGG",
    });
    const handelReverse = () => {
      state.message = state.message.split("").reverse().join("");
    };

    return { ...toRefs(state), handelReverse };
  },
};
</script>