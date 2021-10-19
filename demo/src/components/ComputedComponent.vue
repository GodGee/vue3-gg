<template>
  <div>
    <h3>Computed</h3>
    <button @click="handleAdd">count++</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
export default {
  name: "ComputedComponent",
  setup() {
    const refData = ref(0);
    const count = computed({
      get() {
        return refData.value;
      },
      set(value) {
        console.log("value: ", value);
        refData.value = value + 10;
      },
    });

    const handleAdd = () => {
      count.value++;
    };

    return { count, handleAdd };
  },
};
</script>