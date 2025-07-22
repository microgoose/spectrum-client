<template>
  <Sidebar :items="sidebarStore.sidebarItems" />
</template>

<script setup lang="ts">
import Sidebar from '@/shared/components/sidebar/Sidebar.vue';
import { useSidebarStore } from '@/store/sidebar-store';

const sidebarStore = useSidebarStore();
</script>
