<template>
  <component class="base-icon" :is="icon" />
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  iconName: String,
});

const icon = computed(() => defineAsyncComponent(() => import(`./icons/${props.iconName}.vue`)));
</script>

<style lang="scss" scoped>
.base-icon {
  width: var(--base-icon-size, 1.5rem);
  height: var(--base-icon-size, 1.5rem);
}
</style>
