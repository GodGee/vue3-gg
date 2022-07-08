<template>
  <h5>{{ state.title }}</h5>
  <reactive-component></reactive-component>
  <ref-component></ref-component>
  <template-refs></template-refs>
  <to-refs-component></to-refs-component>
  <computed-component></computed-component>
  <watch-effect-component></watch-effect-component>
  <readonly-component></readonly-component>
  <props-test
    v-model="model"
    :name="refName"
    :user="retUser"
    :attrs1="retUser"
  ></props-test>
  父组件基础类型{{ model }} 父组件引用类型{{ retUser }}
</template>

<script>
import ReactiveComponent from "./components/ReactiveComponent.vue";
import RefComponent from "./components/RefComponent.vue";
import TemplateRefs from "./components/TemplateRefs.vue";
import ToRefsComponent from "./components/ToRefsComponent.vue";
import ComputedComponent from "./components/ComputedComponent.vue";
import WatchEffectComponent from "./components/WatchEffectComponent.vue";
import ReadonlyComponent from "./components/ReadonlyComponent.vue";
import PropsTest from "./components/propsTest.vue";
import { ref, reactive } from "vue";
export default {
  name: "App",
  components: {
    ReactiveComponent,
    RefComponent,
    TemplateRefs,
    ToRefsComponent,
    ComputedComponent,
    WatchEffectComponent,
    ReadonlyComponent,
    PropsTest,
  },
  setup() {
    const state = {
      title: "vue3.0 demo",
    };
    const model = ref("aa");
    const refName = ref(0);
    const retUser = reactive({
      name: "gg",
    });
    return { state, model, refName, retUser };
  },
};
</script>
