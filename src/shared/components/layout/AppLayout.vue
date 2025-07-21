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
      <slot name="sidebar" />
    </div>

    <div :class="$style.appLayoutContent">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts" />
