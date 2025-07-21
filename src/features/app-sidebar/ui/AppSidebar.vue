<template>
  <Sidebar :items="sidebarStore.sidebarItems" />
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/core/sidebar-store';
import Sidebar from '@/shared/components/sidebar/Sidebar.vue';

const sidebarStore = useSidebarStore();
</script>
