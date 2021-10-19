<template>
  <div>
    <button style="margin-left: 10px" @click="handleClick">按钮</button>
    <button style="margin-left: 10px" @click="handleStop">停止 watch</button>
    <button style="margin-left: 10px" @click="handleStopWatchEffect">
      停止 watchEffect
    </button>
    <div style="margin-top: 20px">{{ refData }}</div>
  </div>
</template>

 <script>
import { ref, watch, watchEffect } from "vue";
export default {
  name: "WatchEffectComponent",
  setup() {
    const refData = ref(0);

    const handleClick = () => {
      refData.value++;
    };

    const stop = watch(refData, (value, oldValue) => {
      console.log("watch: ", refData.value);
    });
    const handleStop = () => {
      stop();
    };
    const stopWatchEffect = watchEffect(() => {
      console.log("watchEffect: ", refData.value);
    });
    const handleStopWatchEffect = () => {
      stopWatchEffect();
    };

    return { refData, handleClick, handleStopWatchEffect, handleStop };
  },
};
</script>