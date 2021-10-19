<template>
  <div>
    <button @click="handelAdd">add</button>
    <div ref="num" style="backgroundcolor: green">{{ num }}</div>
  </div>

  <div style="border: 2px solid red">
    <ul style="liststyletype: none">
      <li
        v-for="(item, i) in list"
        :ref="
          (el) => {
            divs[i] = el;
          }
        "
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, reactive, onBeforeUpdate } from "vue";
export default {
  name: "TemplateRefs",
  setup() {
    const num = ref(null);
    onMounted(() => {
      console.log("num:", num);
      console.log("num.value: ", num.value);
      console.log("divs.value : ", divs.value);
    });
    const handelAdd = () => {
      num.value++;
      console.log("click num.value：", num.value);
    };

    const list = reactive([1, 3, 4]);
    const divs = ref([]);

    onBeforeUpdate(() => {
      divs.value = [];
    });

    return { num, list, divs, handelAdd };
  },
};
</script>