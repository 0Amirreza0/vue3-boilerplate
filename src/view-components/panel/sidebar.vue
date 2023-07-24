<template>
  <aside class="sidebar">
    <base-icon class="sidebar__primary-icon" icon-name="add-circle-filled" />
  </aside>
</template>

<script setup>
import BaseIcon from '@/components/base-icon.vue';
</script>

<style lang="scss" scoped>
.sidebar {
  /* FIXME: use color palette from design system */
  border-right: 0.0625rem solid lightgray;

  /* FIXME: create a mixin or function for flex in design system */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* FIXME: end */

  padding: 1.5rem 0.5rem;

  //FIXME: reset this globally
  box-sizing: border-box;

  &__primary-icon {
    //FIXME: add icon size in design system
    --icon-size: 2.25rem;
  }
}
</style>
