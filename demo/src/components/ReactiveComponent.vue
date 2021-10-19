<template>
  <div class="parent">
    <div class="child">
      <button @click="handelReverse">reverse</button>
      <input v-model="state.message" />
      <p>{{ state.message }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "ReactiveComponent",
  setup() {
    const state = reactive({
      message: "Hello World!",
    });
    const handelReverse = () => {
      state.message = state.message.split("").reverse().join("");
    };
    return { state, handelReverse };
  },
};
</script>

<style scoped>
.parent {
  border: 2px solid gray;
  position: relative;
  height: 100px;
}
.child {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding-top: 20px;
}
</style>