<style module lang="css">
.appLayout {
  display: flex;
  min-height: 100vh;
}

.appLayoutSidebar {
  border-right: 1px solid var(--p-surface-border);
}

.appLayoutContent {
  flex: 1;
}
</style>

<template>
  <div :class="$style.appLayout">
    <div :class="$style.appLayoutSidebar">
      <Sidebar />
    </div>

    <div :class="$style.appLayoutContent">
      <AppPageContentLayout>
        <template #header>
          <ProfilePanel />
        </template>

        <template #content>
          <slot />
        </template>
      </AppPageContentLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/feature/app-sidebar/AppSidebar.vue';
import ProfilePanel from '@/feature/profile/ProfilePanel.vue';

import AppPageContentLayout from './AppPageContentLayout.vue';
</script>
