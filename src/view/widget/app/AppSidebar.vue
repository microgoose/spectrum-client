<template>
  <Sidebar :items="sidebarStore.sidebarItems" />
</template>

<script setup lang="ts">
import Sidebar from '@/shared/components/sidebar/SidebarUI.vue';
import { useSidebarStore } from '@/store/app/sidebar-store.ts';

const sidebarStore = useSidebarStore();
</script>
