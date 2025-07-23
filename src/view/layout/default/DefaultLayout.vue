<style module lang="css">
.appLayout {
  display: flex;
  min-height: 100vh;
}

.appLayoutSidebar {
  border-right: 1px solid var(--p-border);
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
      <DefaultContentLayout>
        <template #header>
          <ProfilePanel />
        </template>

        <template #content>
          <slot />
        </template>
      </DefaultContentLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfilePanel from '@/view/entity/user/ProfilePanel.vue';
import Sidebar from '@/view/widget/app-sidebar/AppSidebar.vue';
import DefaultContentLayout from './DefaultContentLayout.vue';
</script>
