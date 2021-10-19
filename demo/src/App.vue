<template>
  <h5>{{ state.title }}</h5>
  <reactive-component></reactive-component>
  <ref-component></ref-component>
  <template-refs></template-refs>
  <to-refs-component></to-refs-component>
  <computed-component></computed-component>
  <watch-effect-component></watch-effect-component>
  <readonly-component></readonly-component>
</template>

<script>
import ReactiveComponent from "./components/ReactiveComponent.vue";
import RefComponent from "./components/RefComponent.vue";
import TemplateRefs from "./components/TemplateRefs.vue";
import ToRefsComponent from "./components/ToRefsComponent.vue";
import ComputedComponent from "./components/ComputedComponent.vue";
import WatchEffectComponent from "./components/WatchEffectComponent.vue";
import ReadonlyComponent from "./components/ReadonlyComponent.vue";

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
  },
  setup() {
    const state = {
      title: "vue3.0 demo",
    };

    return { state };
  },
};
</script>
