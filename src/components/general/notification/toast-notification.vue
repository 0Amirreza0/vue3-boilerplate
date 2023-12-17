<template>
  <div class="toast">
    <base-icon icon-name="add-circle-filled" />
    <p class="body1 toast__message">
      {{ message }}
    </p>
    <div class="toast__actions">
      <base-icon icon-name="close" />
    </div>
  </div>
</template>

<script setup>
import BaseIcon from '@/components/general/base-icon/base-icon.vue';
import { computed } from 'vue';

const props = defineProps({
  message: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.toast {
  @include flex;
  background-color: lightgreen;
  max-width: 20rem;
  padding: 1rem;
  border-radius: 0.5rem;
  color: green;

  &__message {
    margin: 0 0.5rem;
  }
}
</style>
