<style module lang="scss">
.pageContentLayout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.pageContentLayoutHeader {
  border-bottom: 1px solid var(--p-border);
}

.pageContentLayoutContent {
  padding: 16px;
}
</style>

<template>
  <div :class="$style.pageContentLayout">
    <div :class="$style.pageContentLayoutHeader">
      <slot name="header" />
    </div>
    <div :class="$style.pageContentLayoutContent">
      <slot name="content" />
    </div>
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts" />
