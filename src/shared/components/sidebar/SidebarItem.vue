<style module lang="css">
.sidebarItem {
  padding: 0.75rem 1rem;
  font: var(--font-h2);

  &:hover,
  &.isActive {
    color: var(--p-primary-color);
  }

  &.isActive {
    border-left: 1px solid var(--p-primary-color);
  }

  & i {
    margin-right: 4px;
  }
}
</style>

<template>
  <RouterLink :to="item.to" :class="[$style.sidebarItem, item.isActive && $style.isActive]">
    <h2>
      <i :class="item.icon" />
      {{ item.label }}
    </h2>
  </RouterLink>
</template>

<script setup lang="ts">
import { type SidebarItemType } from '@/store/app/sidebar-store.ts';

defineProps<{ item: SidebarItemType }>();
</script>
