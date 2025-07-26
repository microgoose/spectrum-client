<style module lang="css">
.appSidebar {
  position: sticky;
  top: 0;
  padding: 1rem 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
}

.panelMenu {
  padding: 0 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div :class="$style.appSidebar">
    <AppLogo />
    <div :class="$style.panelMenu">
      <SidebarItem v-for="item in items" :key="item.label" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppLogo from '@/shared/components/logo/AppLogo.vue';
import SidebarItem from '@/shared/components/sidebar/SidebarItem.vue';
import { type SidebarItemType } from '@/store/app/sidebar-store.ts';

defineProps<{ items: SidebarItemType[] }>();
</script>
