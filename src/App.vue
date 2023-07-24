<template>
  <panel-sidebar class="panel-sidebar" />
  <main class="main-content">
    <RouterView />
  </main>
</template>

<script setup>
import PanelSidebar from '@/view-components/panel/sidebar.vue';
</script>

<style lang="scss" scoped>
$sidebar-width: 5rem;

.panel-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: $sidebar-width;
}

.main-content {
  padding-left: $sidebar-width;
}
</style>
