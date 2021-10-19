<template>
  <div class="wrapper">
   <div class="input">
      <a-input v-model:value="value" placeholder="Basic usage" />
   </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  },
});
</script>

<style scoped lang='scss'>
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  .input{
      width: 500px;
  }

}
</style>