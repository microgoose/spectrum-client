<style module lang="css">
.appSidebar {
  padding: 20px 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
}

.panelMenu {
  padding: 0 20px;
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
