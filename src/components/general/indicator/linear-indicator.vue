<template>
  <div class="track">
    <div class="track__indicator"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  percentage: {
    type: Number,
    default: 0,
  },
});

const indicatorPercentage = computed(() => `${props.percentage}%`);
</script>

<style lang="scss" scoped>
.track {
  background-color: var(--linear-indicator-track-color, transparent);
  border-radius: var(--linear-indicator-radius, 0.25rem);
  width: 100%;

  &__indicator {
    height: var(--linear-indicator-stroke, 0.25rem);
    width: v-bind(indicatorPercentage);
    border-radius: var(--linear-indicator-radius, 0.25rem);
    background: var(--linear-indicator-color, #00baba);
    transition: var(--linear-indicator-transition, width ease-out 0.25s);
  }
}
</style>
