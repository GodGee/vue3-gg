<template>
  <div  class="container">
    <Item
      v-for="(item, index) in todos"
      :index="index"
      :todoItem="item"
      :key="index"
    ></Item>
  </div>
</template>

<script setup lang="ts">
import Item from "./Item.vue";
import { defineProps, onMounted } from "vue";
import { ItemData } from "../model/ItemData";

const props = defineProps<{ todos: ItemData[] }>();
 
</script>

<style scoped>
.container{
  margin-top: 18px;
}
</style>
