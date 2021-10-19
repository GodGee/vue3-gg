<template>
  <div>
    <button @click="handelAdd">count++</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import { ref, isRef } from "vue";
export default {
  name: "RefComponent",
  setup() {
    const count = ref(0);
    console.log("count: ", count.value);
    const handelAdd = () => {
      count.value++;
      console.log("count: ", count.value);
      console.log(isRef(count));
    };
    return { count, handelAdd };
  },
};
</script>