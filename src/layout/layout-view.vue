<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script setup>
import { defineAsyncComponent, ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const routeLayoutName = ref('default');

const onRouteChange = () => {
  routeLayoutName.value = route.meta?.layout ?? 'default';
};
watch(() => route.meta.layout, onRouteChange);

const layout = computed(() => {
  const layoutName = routeLayoutName.value;
  return defineAsyncComponent(() => import(`@/layout/layouts/${layoutName}.vue`));
});
</script>
