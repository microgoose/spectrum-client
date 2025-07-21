<style module lang="css">
.sidebarItem {
  padding: 0.75rem 1rem;
  font: var(--font-h2);

  & i {
    margin-right: 4px;
  }
}
</style>

<template>
  <router-link :to="item.to" :class="$style.sidebarItem">
    <h2>
      <i :class="item.icon" />
      {{ item.label }}
    </h2>
  </router-link>
</template>

<script setup lang="ts">
import { type SidebarItemType } from '@/core/sidebar-store';

defineProps<{ item: SidebarItemType }>();
</script>
