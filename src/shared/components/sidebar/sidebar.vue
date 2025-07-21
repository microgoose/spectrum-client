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
}
</style>

<template>
  <div :class="$style.appSidebar">
    <AppLogo />
    <ul :class="$style.panelMenu">
      <SidebarItem v-for="item in items" :key="item.label" :item="item" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type SidebarItemType } from '@/core/sidebar-store';
import AppLogo from '@/shared/components/AppLogo.vue';
import SidebarItem from '@/shared/components/sidebar/SidebarItem.vue';

defineProps<{ items: SidebarItemType[] }>();
</script>
