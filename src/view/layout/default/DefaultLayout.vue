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
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/view/widget/app/AppSidebar.vue';
</script>
